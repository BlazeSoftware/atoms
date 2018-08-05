const gulp = require('gulp'),
  options = require('gulp-options'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  size = require('gulp-size'),
  package = options.get('package'),
  source = [`packages/${package}/src/**/*.scss`];

gulp.task('lint', () => gulp.src(source)
  .pipe(sassLint({
    configFile: '.scss-lint.yml'
  }))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
);

gulp.task('build', () => {
  let build = gulp.src(source)
    .pipe(sass())
    .pipe(cssnano({
      autoprefixer: { browsers: 'last 2 versions', add: true },
      zindex: false
    }))
    .pipe(rename((path) => {
      path.extname = '.min.css'
    }))
    .pipe(gulp.dest(`packages/${package}/dist`));

  return build;
});

gulp.task('file-size', () => gulp.src(`packages/${package}/dist/blaze*.min.css`)
  .pipe(size({
    gzip: true,
    showFiles: true
  }))
);

gulp.task('connect', () => {
  connect.server({
    root: `packages/${package}/demo`,
    livereload: true
  });
});

gulp.task('reload', () => {
  gulp.src([`packages/${package}/demo/index.html`])
    .pipe(connect.reload());
});

gulp.task('demo', () => gulp.src(`packages/${package}/dist/**/blaze*.min.css`).pipe(gulp.dest(`packages/${package}/demo`)));
// TODO: Change this to reference node module...
gulp.task('atoms', () => gulp.src(`packages/${package}/dist/blaze.min.css`).pipe(gulp.dest('packages/atoms/src')));
gulp.task('default', done => runSequence('lint', 'build', 'demo', 'atoms', 'file-size', 'reload', done));
gulp.task('watch', () => gulp.watch([...source, `packages/${package}/demo/index.html`], ['default']));
gulp.task('dev-server', ['connect', 'watch']);
gulp.task('dev', done => runSequence('default', 'dev-server', done));
