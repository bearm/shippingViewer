/* File: gulpfile.js */
var gulp   = require('gulp'),
    mocha  = require('gulp-mocha'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    pump   = require('pump');

gulp.task('default', ['watch']);

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

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

gulp.task('build-vendor-js', function() {
    return gulp.src('vendor/*.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('assets/js_min'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js_min'));
});

gulp.task('build-js', function() {
    return gulp.src('app/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('assets/js_min'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js_min'));
});

gulp.task('build', ['build-css', 'build-vendor-js', 'build-js']);

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['jshint']);
    gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
});
