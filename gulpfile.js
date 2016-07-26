const pkg = require('./package.json'),
	gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	header = require('gulp-header'),
	runSequence = require('run-sequence'),
	size = require('gulp-size'),
	minimist = require('minimist'),
	fileExists = require('file-exists'),
	source = ['scss/**/*.scss']

gulp.task('build', () => {
	return gulp.src(source)
		.pipe(sass())
		.pipe(cssnano({
			autoprefixer: { browsers: 'last 2 versions', add: true }
		}))
		.pipe(rename(function (path) {
			path.extname = '.min.css'
		}))
		.pipe(header('/*!v<%= pkg.version %>*/', { pkg }))
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('../blazecss.github.io/css'))
})

gulp.task('demo', () => gulp.src('dist/**/blaze*.min.css').pipe(gulp.dest('demo')))

gulp.task('file-size', () => {
	return gulp.src('dist/blaze*.min.css')
		.pipe(size({
			gzip: true,
			showFiles: true
		}))
})

gulp.task('default', done => runSequence('build', 'demo', 'file-size', done))

// Rerun the task when a file changes
gulp.task('watch', () => {
	gulp.watch(source, ['default'])
})

gulp.task('create-theme', () => {
	var opts = minimist(process.argv.slice(2), {
		string: 'name'
	})

	if (fileExists(`scss/themes/blaze.${opts.name}.scss`))
		throw 'Theme file already exists'

	return gulp.src('scss/themes/blaze.example.scss')
		.pipe(rename(`blaze.${opts.name}.scss`))
		.pipe(gulp.dest('scss/themes', { overwrite: false }))
})

gulp.task('theme', done => runSequence('create-theme', 'default', done))