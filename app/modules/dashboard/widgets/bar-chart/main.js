define([
    'text!./templates/main.html',
    'morris'
], function (tpl, Morris) {
    return function (options) {
        var app = options.sandbox.app;

        var View = app.view.define({
            template: tpl,
            className: 'panel panel-default',
            listen: function () {
                this.listenTo(this, 'rendered', function () {
                    Morris.Bar({
                        element: 'morris-bar-chart',
                        data: app.data.get('barData'),
                        xkey: 'y',
                        ykeys: ['a', 'b'],
                        labels: ['Series A', 'Series B'],
                        hideHover: 'auto',
                        resize: true
                    });
                });
            }
        });
        
        return new View(options);

    };
})
