/* File: gulpfile.js */
var gulp   = require('gulp'),
    mocha  = require('gulp-mocha'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    pump   = require('pump');
/*
gulp.task('default', () =>
    gulp.src('test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
);*/
gulp.task('default', ['watch']);

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
    return gulp.src('assets/styles/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/styles/css'));
});

/*gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/!**!/!*.js'),
            uglify(),
            gulp.dest('assets/js_min')
        ],
        cb
    );
});*/

gulp.task('build-js', function() {
    return gulp.src('app/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('assets/js_min'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js_min'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['jshint']);
    gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
});
