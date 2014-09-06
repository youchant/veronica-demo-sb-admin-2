define([
], function () {

    return function (app) {

        app.basic = {};

        var _changePage = _.throttle(function (page) {
            app.page.switch(page);
        }, 500);

        var Router = app.core.Router.extend({

            routes: {
                '': 'entry',
                "page/:page": "openPage"
            },
            entry: function () {
                this.openPage(app.config.homePage);
            },
            openPage: _changePage

        });

        app.basic.startRoute = function () {
            app.basic.router = new Router;
            app.core.history.start({ pushState: false });
        }

        app.sandbox.on('appStarted', function () {
            app.basic.startRoute();
        });

        app.sandbox.on('pageLoaded', function (name) {
            var config = app.page.get(name);
            app.core.$('.page-header').text(config.name);
        });
    };
});