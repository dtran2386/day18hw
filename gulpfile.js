var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var css_validation = require('gulp-css-validator');
var jslint = require('gulp-jslint');
var browserify = require('gulp-browserify');
var ugligy = require('gulp-uglify');

gulp.task('default', ['html', 'js', 'css']);

gulp.task('html', function () {
   return gulp.src('./*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter())
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
   return gulp.src('./*.css')
        .pipe(css_validation())
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(jslint({
            browser: true,
            sloppy: true,
            node: true,
        }))
        .pipe(browserify())
        //.pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

//gulp.task('js', function () {
//    return gulp.src('./js/app.js')
//        .pipe(ugligy())
//        .pipe(browserify())
//        .pipe(gulp.dest('public/js'));
//        // pass your directives
//        // as an object
////        .pipe(jslint({
////            // these directives can
////            // be found in the official
////            // JSLint documentation.
////            node: true,
////            nomen: true,
////
////            // you can also set global
////            // declarations for all source
////            // files like so:
////            global: [],
////            predef: [],
////
////            // both ways will achieve the
////            // same result; predef will be
////            // given priority because it is
////            // promoted by JSLint
////
////            // pass in your prefered
////            // reporter like so:
////            reporter: 'default',
////
////            // specify whether or not
////            // to show 'PASS' messages
////            // for built-in reporter
////            errorsOnly: false
////        }))
////
////        // error handling:
////        // to handle on error, simply
////        // bind yourself to the error event
////        // of the stream, and use the only
////        // argument as the error object
////        // (error instanceof Error)
////        .on('error', function (error) {
////            console.error(String(error));
////        });
//        
//});
