module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      my_target: {
        files: {
          'build/js/tvm.min.js': 'js/tvm.js'
        }
      }
    },

    uglify: {
      build: {
        src: 'js/tvm.js',
        dest: 'dist/tvm.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};