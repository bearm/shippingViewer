/* File: gulpfile.js */
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
    return gulp.src('assets/styles/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/styles/css'));
});

gulp.task('build-vendor-js', function() {
    return gulp.src('vendor/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js_min'));
});

gulp.task('build-js', function() {
    var uglyOptions = {
        mangle: false
    };
    return gulp.src('app/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('assets/js_min'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify(uglyOptions))
        .pipe(gulp.dest('assets/js_min'));
});

gulp.task('build', ['build-css', 'build-vendor-js', 'build-js']);

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['jshint']);
    gulp.watch('assets/styles/sass/**/*.scss', ['sass']);
});
