/**
 * Created by rash2 on 9/10/2016.
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const pixrem = require('gulp-pixrem');
const del  = require('del');

gulp.task('clean', function(){
    return del('public');
});

gulp.task('sass', function () {
    return gulp.src([
        'source/css/core.scss'
    ])
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(pixrem({ rootValue: '16px' }))
        .pipe(gulp.dest('public'));
});

gulp.task('assets', function () {
    return gulp.src('source/assets/**')
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'assets')));

gulp.watch('View/default/css', gulp.series('sass'));