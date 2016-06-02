module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            buildFrontEnd: {
                src: 'src/finlib.js',
                dest: 'dist/finlib.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['file_append', 'uglify']
            }
        },
        file_append: {
          default_options: {
            files: [
              {
                append: "module.exports = fin;",
                input: 'src/finlib.js',
                output: 'src/finlib.node.js'
              }
            ]
          }
        },
        'http-server': {
            dev: {
                root: '',
                port: 3000,
                host: "0.0.0.0"
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-file-append');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify', 'file_append', 'watch', 'http-server:dev']);
};
