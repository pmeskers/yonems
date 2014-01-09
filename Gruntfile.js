module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'server.js']
    },
    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      express: {
        files: ['**/*.js', 'views/*.html'],
        tasks: ['express:dev'],
        options: {
          spawn: false // Required.
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('server', ['express:dev', 'watch']);
};
