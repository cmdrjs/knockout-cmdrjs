/*jshint node:true, es3:false*/
(function () {
    'use strict';
    module.exports = function (grunt) {
        require('load-grunt-tasks')(grunt); // Load grunt tasks automatically
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            banner: '/* <%= pkg.name %> | version <%= pkg.version %> | license <%= pkg.license %> | (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> | <%= pkg.homepage %> */\n',
            // Task configuration.
            clean: {
                dist: ['dist'],
                dev: ['dev/*', '!dev/index.html']
            },
            copy: {
                dev: {
                    expand: true,
                    src: ['src/knockout.cmdr.js', 'bower_components/cmdrjs/dist/cmdr.js', 'bower_components/cmdrjs/dist/cmdr.css', 'bower_components/knockout/dist/knockout.js'],
                    dest: 'dev/',
                    flatten: true,
                    filter: 'isFile'
                }
            },
            concat: {
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                },
                dist: {
                    src: ['src/knockout.cmdr.js'],
                    dest: 'dist/knockout.cmdr.js'
                }
            },
            uglify: {
                options: {
                    banner: '<%= banner %>'
                },
                dist: {
                    src: '<%= concat.dist.dest %>',
                    dest: 'dist/knockout.cmdr.min.js'
                }
            },
            jshint: {
                all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
            },
            watch: {
                options: {
                    spawn: false
                },
                //watches all scripts an rerun hinting and the tests immediately
                scripts: {
                    files: ['<%= jshint.all %>'],
                    tasks: ['jshint', 'karma:server:run']
                }
            },
            bower: {
                tests: {
                    rjsConfig: 'spec/test-main.js',
                    options: {
                        baseUrl: './'
                    }
                }
            },
            bowerVerify: {
                test: {
                    tasks: ['bower', 'karma:once']
                }
            },
            karma: {
                options: {
                    configFile: 'karma.conf.js'
                },
                //for a single run of test
                once: {
                    singleRun: true,
                },
                //for use while developing and in combination with watch task
                server: {
                    background: true,
                },
            }
        });

        //For development
        grunt.registerTask('dev', ['jshint', 'clean:dev', 'copy:dev', 'watch:scripts']);

        //For testing
        grunt.registerTask('test', ['jshint', 'karma:once']);
        grunt.registerTask('test:full', ['jshint', 'bowerVerify']);
    };
})();