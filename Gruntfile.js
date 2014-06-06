'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

//    // Project settings
//    yeoman: {
//      // configurable paths
//      devApp: 'dev_app',
//      src: 'src',
//      builtModule: 'awesomethings.js',
//      minifiedModule: 'awesomethings.min.js'
//    },

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        // NEVER change this.
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },

//    // Empties folders to start fresh
//    clean: {
//      dist: {
//        files: [{
//          dot: true,
//          src: [
//            '.tmp',
//            '<%= yeoman.builtModule %>',
//            '<%= yeoman.minifiedModule %>'
//          ]
//        }]
//      },
//      server: '.tmp'
//    },

//    concat: {
//      dist: {
//        files: [
//          {
//            dest: '<%= yeoman.builtModule %>',
//            src: [
//              'src/module.js',
//              'src/**/*.js'
//            ]
//          }
//        ]
//      }
//    },

//    // The actual grunt server settings
//    connect: {
//      options: {
//        port: 9000,
//        // Change this to '0.0.0.0' to access the server from outside.
//        hostname: 'localhost',
//        livereload: 35729
//      },
//      livereload: {
//        options: {
//          open: true,
//          base: [
//            '.tmp',
//            'test',
//            '<%= yeoman.devApp %>',
//            '<%= yeoman.src %>'
//          ]
//        }
//      },
//      test: {
//        options: {
//          port: 9001,
//          base: [
//            '.tmp',
//            'test',
//            '<%= yeoman.devApp %>',
//            '<%= yeoman.src %>'
//          ]
//        }
//      },
////      saucetest: {
////        options: {
////          port: 9001,
////          base: ""
////        }
////      },
//      dist: {
//        options: {
//          base: '<%= yeoman.dist %>'
//        }
//      }
//    },

//    env: {
//      test: {
//        src: '.test_env'
//      }
//    },

//    // Make sure code styles are up to par and there are no obvious mistakes
//    jshint: {
//      options: {
//        jshintrc: '.jshintrc',
//        reporter: require('jshint-stylish')
//      },
//      gruntfile: {
//        src: ['Gruntfile.js']
//      },
//      scripts: {
//        src: [
//          '<%= yeoman.devApp %>/scripts/{,*/}*.js',
//          'src/**/*.js'
//        ]
//      },
//      integrationTests: {
//        options: {
//          jshintrc: 'test/integration/.jshintrc'
//        },
//        src: ['test/integration/spec/{,*/}*.js']
//      },
//      unitTests: {
//        options: {
//          jshintrc: 'test/unit/.jshintrc'
//        },
//        src: ['test/unit/spec/{,*/}*.js']
//      }
//    },

//    // Test settings
//    karma: {
//      CI: {
//        configFile: 'test/unit/karma.ci.conf.js',
//        singleRun: true
//      },
//      build: {
//        configFile: 'test/unit/karma.build.conf.js',
//        singleRun: true
//      }
//    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
//    ngmin: {
//      dist: {
//        files: [{
//          src: '<%= yeoman.builtModule %>',
//          dest: '<%= yeoman.minifiedModule %>'
//        }]
//      }
//    },
//
//    protractor: {
//      options: {
//        configFile: 'node_modules/protractor/referenceConf.js', // Default config file
//        keepAlive: true, // If false, the grunt process stops when the test fails.
//        noColor: false, // If true, protractor will not use colors in its output.
//        args: {
//          // Arguments passed to the command
//        }
//      },
//      build: {
//        options: {
//          configFile: 'test/integration/protractor.build.conf.js', // Target-specific config file
//          args: {} // Target-specific arguments
//        }
//      },
//      CI: {
//        options: {
//          configFile: 'test/integration/protractor.ci.conf.js', // Target-specific config file
//          args: {} // Target-specific arguments
//        }
//      }
//    },


//    'saucelabs-jasmine': {
//      all: {
//        options: {
//          urls: ["http://127.0.0.1:9001/test/unit/SpecRunner.html"],
//          tunnelTimeout: 5,
//          build: process.env.TRAVIS_JOB_ID,
//          concurrency: 3,
//          browsers: browsers,
//          testname: "awesome tests",
//          tags: ["master"]
//        }
//      }
//    },

//    uglify: {
//      dist: {
//        files: [{
//          src: '<%= yeoman.minifiedModule %>',
//          dest: '<%= yeoman.minifiedModule %>'
//        }]
//      }
//    },

//    // Watches files for changes and runs tasks based on the changed files
//    watch: {
//      bower: {
//        files: ['bower.json'],
//        tasks: ['wiredep']
//      },
//      gruntfile: {
//        files: ['Gruntfile.js'],
//        tasks: ['jshint:gruntfile']
//      },
//      js: {
//        files: [
//          '<%= yeoman.devApp %>/scripts/{,*/}*.js',
//          'src/**/*.js'
//        ],
//        tasks: ['jshint:scripts'],
//        options: {
//          livereload: true
//        }
//      },
//      jsIntegrationTest: {
//        files: ['test/integration/spec/{,*/}*.js'],
//        tasks: ['jshint:integrationTests', 'protractor:CI']
//      },
//      jsUnitTest: {
//        files: ['test/unit/spec/{,*/}*.js'],
//        tasks: ['jshint:unitTests', 'karma:CI']
//      },
//      livereload: {
//        options: {
//          livereload: '<%= connect.options.livereload %>'
//        },
//        files: [
//          '<%= yeoman.devApp %>/{,*/}*.html',
//          '<%= yeoman.devApp %>/styles/{,*/}*.css',
//          '<%= yeoman.devApp %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
//        ]
//      }
//    },

//    // Automatically inject Bower components into the app
//    wiredep: {
//      app: {
//        src: ['<%= yeoman.devApp %>/index.html'],
//        ignorePath: '<%= yeoman.devApp %>/'
////        , devDependencies: true
//      }
//    }
  });

//  grunt.registerTask('serve', [
//    'clean:server',
//    'wiredep',
//    'connect:livereload',
//    'watch'
//  ]);

//  grunt.registerTask('server', function () {
//    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
//    grunt.task.run(['serve']);
//  });

//  // This could probably be refactored - take out grunt-env and just read sauce credentials from json
//  var setSauceCredentials = function() {
//
//    var isSauceTask = function(taskName) {
//      return ~taskName.search('saucelabs');
//    };
//    var allTasks = _.keys(grunt.config.data);
//    var sauceTasks = _.filter(allTasks, isSauceTask);
//
//    var username = process.env['SAUCE_USERNAME'];
//    var accessKey = process.env['SAUCE_ACCESS_KEY'];
//
//    var getTaskConfig = function(task) {
//      return grunt.config.data[task];
//    };
//
//    var setTaskCredentials = function(taskName) {
//      var taskConfig = getTaskConfig(taskName);
//      taskConfig.all.options.username = username;
//      taskConfig.all.options.key = accessKey;
//      console.log(taskConfig);
//    };
//
//    _.forEach(sauceTasks, setTaskCredentials);
//  };

//  grunt.registerTask('setSauceCredentials', setSauceCredentials);
//
//  grunt.registerTask('sauceTest', function() {
//    var tasks = [
//      'env:test',
//      'setSauceCredentials',
//      'connect:saucetest',
//      'saucelabs-jasmine'
//    ];
//    grunt.task.run(tasks);
////    grunt.task.run('env:test');
////    setSauceCredentials(grunt);
////    // start a test server
////    grunt.task.run('connect:test');
////    // run the saucelabs tasks
////    grunt.task.run('saucelabs-jasmine');
//  });

//  grunt.registerTask('test', function(target) {
//    var setUpTasks = [
//        'clean:server',
//        'connect:test'
//      ],
//      unitTasks = [
//        'karma:build'
//      ],
//      integrationTasks = [
//        'protractor:build'
//      ],
//      tasks;
//    if (target === 'unit') {
//      tasks = setUpTasks.concat(unitTasks);
//    } else if (target === 'integration') {
//      tasks = setUpTasks.concat(integrationTasks);
//    } else {
//      tasks = setUpTasks.concat(unitTasks).concat(integrationTasks);
//    }
//
//    grunt.task.run(tasks);
//  });

//  grunt.registerTask('build', function(target) {
//    var testTasks = [
//        'jshint:gruntfile',
//        'jshint:scripts',
//        'jshint:unitTests',
//        'jshint:integrationTests',
//        'test'
//      ],
//      buildTasks = [
//        // Remove .tmp, built module file, minified module file
//        'clean:dist',
//        // Concatenates scripts from src into the built module file.
//        'concat',
//        // Adds explicit declaration of dependencies. Updated content is saved as minified module file.
//        'ngmin:dist',
//        // Uglifies minified module file.
//        'uglify:dist'
//      ];
//
//    if (target === 'notest') {
//      grunt.task.run(buildTasks);
//    } else {
//      grunt.task.run(testTasks.concat(buildTasks));
//    }
//  });

  grunt.registerTask('default', ['bump']);
};