module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      jsApp: {
        src: ['public/js/src/app.js', 'public/js/src/controller/*'],
        dest: 'public/js/dist/app.js'
      },
      jsLib: {
        src: [
          'public/js/lib/bower/angular/angular.js',
          'public/js/lib/bower/jquery/jquery.js'
        ],
        dest: 'public/js/dist/lib.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/js/dist/app.min.js': ['<%= concat.jsApp.dest %>'],
          'public/js/dist/lib.min.js': ['<%= concat.jsLib.dest %>']
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};