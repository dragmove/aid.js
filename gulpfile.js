var pkg = require('./package.json'),
  gulp = require('gulp'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  Server = require('karma').Server;

var banner = `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.homepage}
 *
 * The MIT License (MIT)
 * Copyright (c) 2016-2017 Hyun-Seok.Kim, dragmove@gmail.com
 */`;

gulp.task('lint', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
  return gulp.src('js/src/aid.js')
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('aid.min.js'))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});