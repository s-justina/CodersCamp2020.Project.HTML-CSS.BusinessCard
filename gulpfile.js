const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src('./styles/**/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/index.html"
        }
    });
    gulp.watch('./styles/**/*.scss', style).on('change',browserSync.reload)
    gulp.watch('./*.html').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;