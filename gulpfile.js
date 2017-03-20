var pkg = require('./package.json'),
  gulp = require('gulp'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  minify = require('gulp-minify'),
  sourcemaps = require('gulp-sourcemaps'),
  clean = require('gulp-clean'),
  runSequence = require('run-sequence'),
  Server = require('karma').Server;

var banner = `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.homepage}
 *
 * The MIT License (MIT)
 * Copyright (c) 2016-2017 Hyun-Seok.Kim, dragmove@gmail.com
 */
`;

gulp.task('lint', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
  return gulp.src('js/src/aid.js')
    .pipe(sourcemaps.init())
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      }
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
  return gulp.src('./aid.js.map')
    .pipe(clean());
});

gulp.task('build', function () {
  runSequence('minify', 'clean');
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});