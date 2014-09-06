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
                    Morris.Area({
                        element: this.$('#morris-area-chart'),
                        data: app.data.get('areaData'),
                        xkey: 'period',
                        ykeys: ['iphone', 'ipad', 'itouch'],
                        labels: ['iPhone', 'iPad', 'iPod Touch'],
                        pointSize: 2,
                        hideHover: 'auto',
                        resize: true
                    });
                });
            }
        });

        return new View(options);

    };
})
