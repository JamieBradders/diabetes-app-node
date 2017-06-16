/* Gulpfile for client side code. */
const gulp = require('gulp')
const fsbx = require('fuse-box')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const rename = require('gulp-rename')

/**
 * Scripts
 */
function bundle() {
  let fuseBox = fsbx.FuseBox.init({
    homeDir : 'app/assets/js',
    outFile : 'public/js/bundle.js',
    cache   : true,
    plugins : [
      fsbx.BabelPlugin()
      // fsbx.UglifyJSPlugin()
    ],
  }).bundle('> index.js')
}

gulp.task('scripts', () => bundle())

/**
 * SCSS Tasks
 */
gulp.task('scss', () => {
  gulp.src('./app/assets/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(clean({compatibility: 'ie9'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./public/css/'))
})

gulp.task('styles', ['scss']);

/**
 * Watchers
 */
gulp.task('watch', () => {
  gulp.watch(['./app/assets/scss/**/*'],  ['styles'])
  gulp.watch(['./app/assets/js/**/*.js'], ['scripts'])
})

gulp.task('default', () => {
  gulp.start('styles', 'scripts', 'watch')
})
