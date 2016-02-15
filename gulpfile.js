var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: path.resolve('./game')
	});
});

//gulp.task('default', ['webserver']);
