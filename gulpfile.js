/* global require */

var gulp    = require('gulp'),
		rename  = require('gulp-rename'),
		less    = require('gulp-less'),
		minCSS  = require('gulp-minify-css'),
		combiner= require('stream-combiner2'),
		concat  = require('gulp-concat'),
		uglify  = require('gulp-uglify'),
		webserver = require('gulp-webserver');

gulp.task('default', function(){
	"use strict";
	gulp.watch('skin/frontend/superstudio/default/css/less/*.less', ['CSS']);
	gulp.watch('skin/frontend/superstudio/default/css/less/mixins/*.less', ['CSS']);
	gulp.watch('skin/frontend/superstudio/default/css/less/bootstrap/*.less', ['CSS']);
	gulp.watch('skin/frontend/superstudio/default/css/less/bootstrap/mixins/*.less', ['CSS']);
	// gulp.watch('skin/frontend/superstudio/default/scripts/modules/*.js', ['Javascript']);
});

gulp.task('webserver', function() {
	"use strict";
	gulp.src('')
		.pipe(webserver({
			host: '0.0.0.0',
			livereload: true,
			directoryListing: false,
			open: false,
			fallback: 'index.html'
		}));
});


gulp.task('Javascript', function() {
	"use strict";
	var combined = combiner.obj([
		gulp.src([
			'includes/scripts/modules/Plugins.js',
			'includes/scripts/modules/Portada.js',
			'includes/scripts/modules/Superestudio.js'
		]),
		concat('scripts.js'),
		uglify(),
		gulp.dest('includes/scripts')
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});

gulp.task('CSS', function() {
	"use strict";
	var combined = combiner.obj([
		gulp.src('skin/frontend/superstudio/default/css/less/superestudio.less'),
		less(),
		minCSS(),
		rename('superestudio.css'),
		gulp.dest('skin/frontend/superstudio/default/css')
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});

gulp.task('CSS-low', function() {
	"use strict";
	var combined = combiner.obj([
		gulp.src('skin/frontend/superstudio/default/css/less/superestudio-low.less'),
		less(),
		minCSS(),
		rename('superestudio-low.css'),
		gulp.dest('skin/frontend/superstudio/default/css')
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});
