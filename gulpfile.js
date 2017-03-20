var pkg = require('./package.json'),
  gulp = require('gulp'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  minify = require('gulp-minify'),
  runSequence = require('run-sequence'),
  sourcemaps = require('gulp-sourcemaps'),
  Server = require('karma').Server;

gulp.task('lint', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
  var banner = `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.homepage}
 *
 * The MIT License (MIT)
 * Copyright (c) 2016-2017 Hyun-Seok.Kim, dragmove@gmail.com
 */
`;

  return gulp.src('js/src/aid.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      }
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./'));
});

gulp.task('sourcemaps', function () {
  return gulp.src('aid.min.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('build', function () {
  runSequence('minify', 'sourcemaps');
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});

