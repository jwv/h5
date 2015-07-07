var gulp = require('gulp');
var browserSync = require("browser-sync");

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    files: [
    	'./index.html',
    	'./css/*.css',
  		'./js/*.js'
    ],
    open: false
  });
});

gulp.task('default', ['browser-sync']);
