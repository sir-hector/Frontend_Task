const API_URL =  'http://localhost:3000';

$(document).ready(function () {

    const Car = Backbone.Model.extend({});
    const Cars = Backbone.Collection.extend({
        model: Car,
        url: `${API_URL}/cars`
    });

    const View = Backbone.View.extend({
        el: "#page",
        collection: new Cars(),
        template: Handlebars.compile($("#tmpl-handlebar").html()),
        events: {
            'click #trigger_api': 'loadData'  
        },
        loadData: function () {
            this.collection.fetch();  
        },
        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },
        render: function () {
            this.$el.find("#content").html(this.template(this.collection.toJSON()));  // make sure you are selecting the correct element to render your template
        }
    })

    new View();
});