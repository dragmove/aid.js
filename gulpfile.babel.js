const pkg = require('./package.json'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  eslint = require('gulp-eslint'),
  KarmaServer = require('karma').Server;

const $ = require('gulp-load-plugins')();

const webpackConfig = require('./webpack.config.js'),
  devConfig = webpackConfig(true, {banner: banner()}),
  prodConfig = webpackConfig(false, {banner: banner()});

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
gulp.task('webpack-dev-server', function () {
  const compiler = webpack(devConfig);

  var server = new WebpackDevServer(compiler, devConfig.devServer);
  server.listen(devConfig.devServer.port, 'localhost', (err) => {
    if (err) console.error('[webpack-dev-server failed to start :', err);
  });
});

gulp.task('build', function (callback) {
  const compiler = webpack(prodConfig);

  compiler.run((error, stats) => {
    if (error) throw new Error(error);
    callback();
  });
});

gulp.task('karma', function (done) {
  new KarmaServer({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});

/*
var pkg = require('./package.json'),
  gulp = require('gulp'),
  header = require('gulp-header'),
  eslint = require('gulp-eslint'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  Server = require('karma').Server;

gulp.task('lint', () => {
  return gulp.src('./js/src/aid.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
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
*/