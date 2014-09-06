
'use strict';

module.exports = function (grunt) {

    var reqConfSmall = require('./app/require-conf.js')();

    grunt.initConfig({
        veronica: {
            defaults: {
                options: {
                    appDir: './app',
                    baseUrl: '.',
                    dir: './release',
                    reqConfig: require('./app/require-conf.js')(),
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
                    clean: [],
                    merge: [],
                    removeCombined: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-veronica');
    grunt.registerTask('default', ['veronica']);

};
