(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory();
        });
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.ReqConfig = factory();
    }
}(this, function () {

    return function (framePath) {
        framePath || (framePath = './vendor');
        return {
            debug: true,
            paths: {
                'underscore': framePath + '/underscore/underscore',
                'jquery': framePath + '/jquery/jquery',
                'eventemitter': framePath + '/eventemitter2/lib/eventemitter2',
                'bootstrap': framePath + '/bootstrap/dist/js/bootstrap',
                'text': framePath + '/requirejs-text/text',
                'css': framePath + '/require-css/css',
                'normalize': framePath + '/require-css/normalize',
                'css-builder': framePath + '/require-css/css-builder',

                'bootstrap': framePath + '/bootstrap/dist/js/bootstrap',
                'metisMenu': framePath + '/metisMenu/dist/metisMenu',
                'morris': framePath + '/morrisjs/morris',
                'raphael': framePath + '/raphael/raphael',
                'datatables': framePath + '/DataTables/media/js/jquery.dataTables',
                'datatables-bootstrap': framePath + '/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap'
            },
            shim: {
                'underscore': { 'exports': '_' },
                'jquery': { 'exports': 'jquery' },
                'bootstrap': { deps: ['jquery'] },
                'morris': { 'exports': 'Morris', deps: ['raphael'] },
                'datatables-bootstrap': { deps: ['datatables'] }
            },
            packages: [{
                name: 'veronica',
                location: framePath + '/veronica/lib'
            }, {
                name: 'veronica-mvc',
                location: framePath + '/veronica-mvc/lib'
            }]
        };
    }

}));
