define([
    'text!./templates/main.html',
    'metisMenu',
    'css!./styles/main.css'
], function (tpl) {
    return function (options) {
        var app = options.sandbox.app;
        var $ = app.core.$;
        var _ = app.core._;

        var View = app.view.define({
            template: tpl,
            className: 'navbar navbar-default navbar-static-top',
            enhance: function () {
                this.$('.fn-side-menu').metisMenu();
            },
            subscribe: function () {
                var me = this;

                this.sub('pageLoaded', function (name) {
                    var $sideMenu = me.$('.fn-side-menu');
                    $sideMenu.find('.active').removeClass('active');
                    var active = _.find($sideMenu.find('[href]'), function (el) {
                        return $(el).attr('href') === '#page/' + name;
                    });

                    active && $(active).addClass('active');
                });
            }
        });

        return new View(options);

    };
})
