var pkg = require('./package.json'),
  gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  minify = require('gulp-minify'),
  Server = require('karma').Server;

gulp.task('lint', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify', function () {
  gulp.src('js/src/aid.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/js/tests/karma.conf.js'
    // singleRun: true
  }, done).start();
});

