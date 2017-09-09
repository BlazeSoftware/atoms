const pkg = require('./package.json'),
  gulp = require('gulp'),
  options = require('gulp-options'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  rename = require('gulp-rename'),
  header = require('gulp-header'),
  runSequence = require('run-sequence'),
  size = require('gulp-size'),
  fileExists = require('file-exists'),
  source = ['scss/**/*.scss'];


gulp.task('lint', () => gulp.src(source)
    .pipe(sassLint({
      configFile: './.scss-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
);

gulp.task('build', () => {
  let build = gulp.src(source)
    .pipe(sass())
    .pipe(cssnano({
      autoprefixer: {browsers: 'last 2 versions', add: true}
    }))
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(header('/*!v<%= pkg.version %>*/', {pkg}))
    .pipe(gulp.dest('dist'));

  if (options.has('site')) {
    build = build.pipe(gulp.dest('../blazecss.github.io/css'));
  }

  return build;
});

gulp.task('file-size', () => gulp.src('dist/blaze*.min.css')
    .pipe(size({
      gzip: true,
      showFiles: true
    }))
);

gulp.task('create-theme', () => {
  const name = options.get('name');

  if (!name) {
    throw 'Specify a name by running gulp --name=<theme-name>';
  }

  if (fileExists(`scss/themes/blaze.${name}.scss`)) {
    throw 'Theme file already exists';
  }

  return gulp.src('scss/themes/blaze.example.scss')
    .pipe(rename(`blaze.${name}.scss`))
    .pipe(gulp.dest('scss/themes', {overwrite: false}));
});

gulp.task('theme', done => runSequence('create-theme', 'default', done));
gulp.task('demo', () => gulp.src('dist/**/blaze*.min.css').pipe(gulp.dest('demo')));
gulp.task('default', done => runSequence('lint', 'build', 'demo', 'file-size', done));
gulp.task('watch', () => gulp.watch(source, ['default']));
