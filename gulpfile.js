var 
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	fileinclude = require('gulp-file-include');

gulp.task('styles', function() {
	gulp
		.src('scss/matadora.scss').pipe(plumber())
		.pipe(autoprefixer({cascade: true})).pipe(sass({outputStyle: 'compressed'}))
		.pipe(concat('matadora.min.css')).pipe(gulp.dest('./build/'))
		.pipe(reload({stream: true}));
	gulp
		.src('scss/matadora.scss').pipe(plumber())
		.pipe(autoprefixer({cascade: true})).pipe(sass({outputStyle: 'expanded'}))
		.pipe(concat('matadora.css')).pipe(gulp.dest('./build/'))
		.pipe(reload({stream: true}));
});

gulp.task('html', function() {
	gulp
		.src('test/partials/_index.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(concat('index.html'))
		.pipe(gulp.dest('./test/'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({server: {
		baseDir: './',
		index: './test/index.html'
	}});
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['styles']);
	gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ['browser-sync', 'styles', 'html', 'watch']);