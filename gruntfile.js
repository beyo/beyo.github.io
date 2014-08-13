
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      RequireJS: {
        expand: true,
        cwd: 'bower_components/requirejs',
        src: 'require.js',
        dest: 'js/lib/'
      },
      RequireCSS: {
        expand: true,
        cwd: 'bower_components/require-css',
        src: 'css.min.js',
        dest: 'js/lib/'
      },
      jQuery: {
        expand: true,
        cwd: 'bower_components/jquery/dist',
        src: '**/*.min.{js,map}',
        dest: 'js/lib/'
      },
      Bootstrap: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/js',
            src: '**/*.min.js',
            dest: 'js/lib/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/fonts',
            src: '**/*',
            dest: 'fonts/'
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/css',
            src: '**/*.min.css',
            dest: 'css/'
          },
        ]
      },
      FontAwesome: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/font-awesome/css',
            src: 'font-awesome.min.css',
            dest: 'css/'
          },
          {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts',
            src: '*',
            dest: 'fonts/'
          }
        ]
      }
    }
  });

  // Load plugins
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    'copy:RequireJS',
    'copy:RequireCSS',
    'copy:jQuery',
    'copy:Bootstrap',
    'copy:FontAwesome'
  ]);

};
