var API_URL;

API_URL = 'http://localhost:3000';

$(function() {
  var Car, Cars, View;
  Car = Backbone.Model.extend({});
  Cars = Backbone.Collection.extend({
    model: Car,
    url: `${API_URL}/cars`
  });
  View = Backbone.View.extend({
    el: "#page",
    collection: new Cars(),
    template: Handlebars.compile($("#tmpl-handlebar").html()),
    events: {
      'click #trigger_api': 'loadData'
    },
    loadData: function() {
      return this.collection.fetch();
    },
    initialize: function() {
      return this.listenTo(this.collection, 'sync', this.render);
    },
    render: function() {
      return this.$("#content").html(this.template(this.collection.toJSON())); // make sure you are selecting the correct element to render your template
    }
  });
  return new View();
});
