define([
    'text!./templates/main.html',
    'datatables-bootstrap'
], function (tpl) {
    return function (options) {
        var app = options.sandbox.app;
        var View = app.view.define({
            template: tpl,
            enhance: function () {
                this.$('#dataTables-example').dataTable();
            }
        });

        return new View(options);

    };
})
