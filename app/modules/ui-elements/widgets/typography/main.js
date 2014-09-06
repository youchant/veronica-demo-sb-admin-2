define([
    'text!./templates/main.html'
], function (tpl) {
    return function (options) {
        var app = options.sandbox.app;
        var View = app.view.define({
            template: tpl
        });

        return new View(options);

    };
})
