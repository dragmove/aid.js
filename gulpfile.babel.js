const pkg = require('./package.json'),
  gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  KarmaServer = require('karma').Server;

const $ = require('gulp-load-plugins')();

function banner() {
  return `/*
  * ${pkg.name} ${pkg.version}
  * ${pkg.homepage}
  *
  * The MIT License (MIT)
  * Copyright (c) 2017 Hyun-Seok.Kim, dragmove@gmail.com
  */
`;
}

// tasks
gulp.task('karma', function (done) {
  new KarmaServer({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});