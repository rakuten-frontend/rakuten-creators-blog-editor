// Watch updates and run predefined tasks
//
// grunt-contrib-watch: <https://github.com/gruntjs/grunt-contrib-watch>

'use strict';

module.exports = {

  // Reload Grunt config
  grunt: {
    files: [
      'Gruntfile.js',
      'grunt/*.js'
    ],
    options: {
      reload: true
    }
  },

  // Inject Bower components
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },

  // Validate JavaScript
  //js: {
  // files: ['<%= path.js %>/**/*.js'],
  //  tasks: ['newer:jshint', 'newer:jscs']
  //},

  // Handle CSS files
  css: {
    files: ['<%= path.css %>/**'],
    tasks: ['newer:autoprefixer', 'newer:csslint']
  },

  // Compile Jade
  jade: {
    files: ['<%= path.markups %>/**/*.jade'],
    tasks: ['jade']
  },

  // Compile Stylus
  stylus: {
    files: ['<%= path.styles %>/**'],
    tasks: ['stylus']
  }

};
