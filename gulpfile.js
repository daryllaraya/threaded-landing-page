const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)