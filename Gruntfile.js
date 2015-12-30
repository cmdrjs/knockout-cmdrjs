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
                dist: ['dist']
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
            version: {
                default: {
                    src: ['package.json']
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
            },
            readpkg: {
                default: { }
            }
        });
        
        //Utils
        grunt.registerMultiTask('readpkg', 'Read in the package.json file', function (){
            grunt.config.set('pkg', grunt.file.readJSON('package.json'));
        });

        //For development
        grunt.registerTask('dev', ['jshint', 'clean:dev', 'copy:dev', 'watch:scripts']);

        //For testing
        grunt.registerTask('test', ['jshint', 'karma:once']);
        grunt.registerTask('test:debug', ['karma:once']);
        grunt.registerTask('test:full', ['jshint', 'bowerVerify']);
        
        //For building
        grunt.registerTask('build', ['jshint', 'karma:once', 'clean', 'concat', 'uglify']);
                
        //For releasing
        grunt.registerTask('release', ['release:patch']);
        grunt.registerTask('release:major', ['version::major', 'readpkg', 'build']);
        grunt.registerTask('release:minor', ['version::minor', 'readpkg', 'build']);
        grunt.registerTask('release:patch', ['version::patch', 'readpkg', 'build']);
    };
})();