define([
    'veronica',
    'bootstrap'
], function (veronica) {

    var app = veronica.createApp({
        modules: [{
            name: 'basic',
            source: './modules'
        }, {
            name: 'dashboard',
            source: './modules'
        }, {
            name: 'ui-elements',
            source: './modules'
        }],
        homePage: 'dashboard'
    });

    app.launch().done(function () {

        app.module.apply();
        app.widget.package();
       // app.basic.startRoute();
        app.page.start();
    });
});