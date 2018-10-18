var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var gulpSequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var babel = require("gulp-babel");
var del = require('del');

gulp.task('html', function () {
  return gulp.src('./index.html')
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('fonts', function () {
  return gulp.src('./fonts/*')
    .pipe(gulp.dest('./docs/fonts'));
});

gulp.task('css', function () {
  return gulp.src('./styles.css')
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('js', function () {
  return gulp.src('./scripts.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('json', function () {
  return gulp.src('./manifest.json')
    .pipe(gulp.dest('./docs/'));
});

gulp.task('images', function () {
  return gulp.src('./assets/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})//,
      /*imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })*/
    ]))
    .pipe(gulp.dest('./docs/assets/'));
});

gulp.task('clean', function () {
  return del(['docs/**/*']);
});

gulp.task('default', gulpSequence('clean', ['html', 'css', 'js', 'images', 'fonts', 'json']));