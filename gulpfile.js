var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename');

gulp.task('concat', function () {
  return gulp.src('./public//markup/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public//markup/build/'));
});
gulp.task('watch', function() {
    
    gulp.watch("./public/markup/css/*.css", ['concat']);
    
});