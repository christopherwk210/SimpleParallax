module.exports = function(grunt) {

  //Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      build: {
        src: 'src/<%= pkg.name %>.js'
      }
    },
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  //Load packages
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //Default task minifies
  grunt.registerTask('default', ['jshint', 'uglify']);

};
