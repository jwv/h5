var gulp = require('gulp');
var browserSync = require("browser-sync");

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
gulp.task('browser-sync', function() {
	browserSync({
		// proxy: "server.dev"
		server: {
			baseDir: "./",
			index: "index.html",
			directory: false
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
