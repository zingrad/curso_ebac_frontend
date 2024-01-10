module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "dist/styles/main.css": "src/styles/main.less" 
          }
        }
      },
      watch: {
        styles: {
          files: ['src/**/*.less'],
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },
        scripts:{
            files: ['src/**/*.js'],
            tasks: ['uglify'],
        }

      },
      uglify: {
        my_target: {
          files: {
            './dist/scripts/main.min.js': ['./src/scripts/main.js']
          }
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch','uglify']);
   
  };