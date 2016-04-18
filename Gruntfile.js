module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        karma : {
           unit: {
            configFile: 'js/tests/karma.conf.js'
            // keepalive: true
            // autoWatch: true
           }
        },

        jasmine: {
            src: [],
            options: {
                vendor: []
            }
        },

        htmlConvert: {
            'tmpl' : {
                options: {
                    // custom options, see below 
                    rename: function(moduleName) {
                        var name = moduleName.replace('.tmpl.html', '').replace('../template/', '');
                        return name;
                    },
                    quoteChar: '\'',
                    indentString: '',
                    indentGlobal: '    ',
                    prefix: '(function(){\n    if(!window.nc) window.nc = {};\n    if(!nc.PROJECT_NAME) nc.PROJECT_NAME = {};\n',
                    suffix: '\n    nc.PROJECT_NAME.tmpl = tmpl;\n}());\n'
                },
                src: ['template/**/*.tmpl.html'],
                dest: 'js/template/tmpl.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html-convert');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('tmpl', ['htmlConvert:tmpl']);
    grunt.registerTask('default', ['concat', 'copy', 'uglify']);
};
