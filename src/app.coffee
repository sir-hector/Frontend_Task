API_URL = 'http://localhost:3000'

$ ->
  Car = Backbone.Model.extend({})

  Cars = Backbone.Collection.extend
    model: Car
    url: "#{API_URL}/cars"

  View = Backbone.View.extend
    el: "#page"
    collection: new Cars()
    template: Handlebars.compile($("#tmpl-handlebar").html())
    events:
      'click #trigger_api': 'loadData'  
    loadData: ->
      @collection.fetch()
    initialize: ->
      @listenTo @collection, 'sync', @render
    render: ->
      @$("#content").html(@template(@collection.toJSON()))  

  new View()