define([
    'text!./templates/main.html'
], function (tpl) {
    return function (options) {
        var app = options.sandbox.app;
        var View = app.view.define({
            template: tpl,
            className: 'panel panel-default'
        });
        
        return new View(options);

    };
})
