module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: ['public/js/app.js', 'public/js/controller/*'],
        dest: 'public/js/dist/app.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/js/dist/app.min.js': ['<%= concat.js.dest %>']
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