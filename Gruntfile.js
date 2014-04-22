module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      my_target: {
        files: {
          'build/js/tvm.min.js': 'js/tvm.js',
          'build/js/scripts.min.js' : 'js/scripts.js'
        }
      }
    },

    uglify: {
      build: {
        src: 'js/tvm.js',
        dest: 'build/js/tvm.min.js'
      },
      buil : {
        src: 'js/scripts.js',
        dest: 'build/js/scripts.min.js'
      }
    },

    sass : {
      dist : {
        options: { 
          style: 'compressed'
        },
        files : { 
          'build/css/style.min.css' : 'css/style.scss',
          'build/css/bootstrap.min.css' : 'css/bootstrap.scss'
        }
      }
    },

    watch : {
      files: ['css/style.scss', 'css/bootstrap.scss', 'css/bootstrap/*.scss'],
      tasks: 'sass'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('min', ['uglify', 'sass']);
  grunt.registerTask('default', ['uglify']);

};