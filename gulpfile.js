const gulp = require('gulp'),
  cssnano = require('gulp-cssnano'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  size = require('gulp-size'),
  source = [`packages/scss/src/**/*.scss`];

gulp.task('lint', () =>
  gulp
    .src(source)
    .pipe(
      sassLint({
        configFile: '.scss-lint.yml',
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
);

gulp.task('build', () => {
  let build = gulp
    .src(source)
    .pipe(sass())
    .pipe(
      cssnano({
        autoprefixer: { browsers: 'last 2 versions', add: true },
        zindex: false,
      })
    )
    .pipe(
      rename((path) => {
        path.extname = '.min.css';
      })
    )
    .pipe(gulp.dest(`packages/scss/dist`));

  return build;
});

gulp.task('file-size', () =>
  gulp.src(`packages/scss/dist/blaze*.min.css`).pipe(
    size({
      gzip: true,
      showFiles: true,
    })
  )
);

gulp.task('connect', () => {
  connect.server({
    root: `packages/scss/www`,
    livereload: true,
  });
});

gulp.task('reload', () => {
  gulp.src([`packages/scss/www/index.html`]).pipe(connect.reload());
});

gulp.task('demo', () => gulp.src(`packages/scss/dist/**/blaze*.min.css`).pipe(gulp.dest(`packages/scss/www`)));
// TODO: Change this to reference node module...
gulp.task('default', (done) => runSequence('lint', 'build', 'demo', 'file-size', 'reload', done));
gulp.task('watch', () => gulp.watch([...source, `packages/scss/www/index.html`], ['default']));
gulp.task('dev-server', ['connect', 'watch']);
gulp.task('dev', (done) => runSequence('default', 'dev-server', done));
