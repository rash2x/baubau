/**
 * Created by rash2 on 9/10/2016.
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const pixrem = require('gulp-pixrem');
const del  = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

const destPath = 'public';

gulp.task('clean', function(){
    return del(destPath);
});

gulp.task('sass', function () {
    return gulp.src([
        'source/css/core.scss'
    ])
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(pixrem({ rootValue: '16px' }))
        .pipe(gulp.dest(destPath));
});

gulp.task('assets', function () {
    return gulp.src('source/assets/**')
        .pipe(gulp.dest(destPath));
});

gulp.task('js', function () {
    return gulp.src('source/js/**')
        .pipe(gulp.dest(destPath + '/js'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'assets', 'js')));

gulp.watch('source/css', gulp.series('sass'));