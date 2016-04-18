var pkg = require('./package.json'),
	gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
		pattern: ['gulp-*', 'gulp.*'],
		replaceString: /\bgulp[\-.]/
	}),
	// connect = require('gulp-connect'),
	// jshint = require('gulp-jshint'),
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglify'),
	// watch = require('gulp-watch'),
	// rename = require('gulp-rename'),
	// tmpl2js = require('gulp-tmpl2js'),
	// insert = require('gulp-insert'),
	livereload = require('gulp-livereload'),
	dateFormat = require('dateformat'),
	path = require('path'),
	Server = require('karma').Server;

var banner = ['/**', 
	' * @name : <%= pkg.name %>',
	' * @version : v<%= pkg.version %>',
	' * @author : <%= pkg.author %>',
	' */',
	''].join('\n');

gulp.task('connect', function() {
	plugins.connect.server({
		root: './',
		port: 8080
		// livereload: false
	});
});

gulp.task('lint', function() {
	return gulp.src('js/src/**/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'));
});

gulp.task('concat', function() {
	return gulp.src(['js/lib/doT.js', 'js/template/sample.tmpl.js', 'js/template/test.tmpl.js','js/src/util.js', 'js/src/object.js'])
		.pipe(plugins.concat('BUILD_FILE_NAME.js'))
		.pipe( plugins.header(banner, {pkg: pkg}) )
		.pipe(gulp.dest('build'))
		.pipe( plugins.livereload() );
});

gulp.task('custom-backup', function() {
	var date = new Date(),
		prefix = dateFormat(date, 'yyyymmdd-HH-MM'),
		dir = 'backup/' + dateFormat(date, 'yyyy') + '/' + dateFormat(date, 'mmdd');
	
	return gulp.src('build/BUILD_FILE_NAME.js')
		.pipe( plugins.rename({prefix: prefix + '_'}) )
		.pipe( gulp.dest(dir) );
});

gulp.task('uglify', function() {
	return gulp.src('build/BUILD_FILE_NAME.js')
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.uglify())
		.pipe( plugins.header(banner, {pkg: pkg}) )
		.pipe(gulp.dest('build'));
});

gulp.task('tmpl', function() {
	return gulp.src('template/*.tmpl.html')
		.pipe( plugins.tmpl2js({
			mode: 'format',
			wrap: false
		}) )
		.pipe(plugins.insert.transform(function(contents, file) {
			var fileName = path.basename(file.path).split('.').shift();

			var prefix = '(function(){\n    if(!window.nc) window.nc = {};\n    if(!nc.PROJECT_NAME) nc.PROJECT_NAME = {};\n    if(!nc.PROJECT_NAME.tmpl) nc.PROJECT_NAME.tmpl = {};\n    \n    var tmpl = ',
				suffix = ';\n    \n    nc.PROJECT_NAME.tmpl["' + fileName + '"] = tmpl;\n}());\n';
			return prefix + contents + suffix;
		}))
		.pipe( plugins.rename({
			extname:'.js'
		}) )
		.pipe( gulp.dest('js/template/') ); //Output folder
});

/*
 * livereload
 */
gulp.task('reload', function() {
	console.log('reload');
	gulp.src('css/**/*.css').pipe( plugins.livereload() );
	// gulp.src('build/**/*.js').pipe( plugins.livereload() );
});

/*
 * use tasks
 */
gulp.task('watch', function() {
	// set livereload
	plugins.livereload.listen();

	gulp.watch(['js/**/*.js'], ['lint', 'concat']);
	gulp.watch(['css/**/*.css'], ['reload']);
});

gulp.task('build', plugins.sequence('lint', 'concat', 'custom-backup', 'uglify') );

/*
 * use karma
 */
gulp.task('karma', function(done) {
	new Server({
		configFile: __dirname + '/js/tests/karma.conf.js'
		// singleRun: true
	}, done).start();
});