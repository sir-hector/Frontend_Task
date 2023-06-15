$(document).ready(function () {

    const Car = Backbone.Model.extend({});
    const Cars = Backbone.Collection.extend({
        model: Car,
        url: 'http://localhost:3000/cars'
    });

    const View = Backbone.View.extend({
        el: "#content",
        collection: new Cars(),
        template: Handlebars.compile($("#tmpl-handlebar").html()),
        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
            this.collection.fetch();
        },
        render: function () {
            console.log(this.collection.toJSON())
            this.$el.html(this.template(this.collection.toJSON()));
        }
    })

    new View();
});