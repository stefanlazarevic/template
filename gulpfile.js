const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      jade = require('gulp-jade'),
      rename = require('gulp-rename'),
      livereload = require('gulp-livereload');

gulp.task('jade', function() {
  gulp.src('src/index.jade')
      .pipe(jade({
        pretty: true
      }).on('error', console.error.bind(console)))
      .pipe(gulp.dest('dist/'))
      .pipe(livereload());
});

gulp.task('sass', function() {
  gulp.src('src/sass/app.sass')
      .pipe(sass(
        {outputStyle: 'compressed'}
      ).on('error', sass.logError))
      .pipe(rename({
        suffix: ".min",
      }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**', ['jade', 'sass']);
});


gulp.task('default', ['jade', 'sass']);