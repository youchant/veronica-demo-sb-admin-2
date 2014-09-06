define([
    'text!./templates/main.html',
    'morris'
], function (tpl) {
    return function (options) {
        var app = options.sandbox.app;
        var View = app.view.define({
            template: tpl,
            className: 'panel panel-default',
            listen: function () {
                this.listenTo(this, 'rendered', function () {
                    Morris.Donut({
                        element: 'morris-donut-chart',
                        data: app.data.get('donutData'),
                        resize: true
                    });
                });
            }
        });
        
        return new View(options);
    };
})
