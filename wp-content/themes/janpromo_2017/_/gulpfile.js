var gulp = require('gulp'),
ugly = require('gulp-clean-css'),
rename = require('gulp-rename'),
sass = require('gulp-sass'),
concat = require('gulp-concat');

gulp.task('default', function(){
	gulp.src('./css/scss/**/*.scss')
	.pipe(sass())
	.pipe(ugly())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('../css'));
})