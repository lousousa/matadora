var 
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber');

gulp.task('styles', function() {
	gulp
		.src('scss/matadora.scss').pipe(plumber())
		.pipe(autoprefixer({cascade: true})).pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('matadora.min.css')).pipe(gulp.dest('./dist/'));
	gulp
		.src('scss/matadora.scss').pipe(plumber())
		.pipe(autoprefixer({cascade: true})).pipe(sass({outputStyle: 'expanded'}))
		.pipe(concat('matadora.css')).pipe(gulp.dest('./dist/'));
});
gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);