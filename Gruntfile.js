module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          sassDir: 'src/stylesheets',
          cssPath: 'web/public/css'
        }
      }
    },

    copy: {
      views: {
        expand: true,
        flatten: true,
        src: 'src/views/*',
        dest: 'web/'
      }
    },

    express: {
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'server.js']
    },

    uglify: {
      dev: {
        files: {
          'web/public/js/web.js': ['src/js/**.js']
        }
      }
    },

    watch: {
      express: {
        files: ['src/**/*'],
        tasks: ['build', 'express:dev'],
        options: {
          spawn: false // Required.
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('build', ['compass', 'uglify', 'copy']);
  grunt.registerTask('default', ['jshint', 'build']);
  grunt.registerTask('server', ['express:dev', 'watch']);
};
