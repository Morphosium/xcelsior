'use strict';
var bundle = require('@lernetz/gulp-typescript-bundle');

var ts = require('gulp-typescript');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
const babelify = require('babelify');

const SCSS_PATH = './src/sass/**/*.scss';
const TS_PATH = './src/ts/**/*.ts';

sass.compiler = require('node-sass');

let buildSass = () => {
  return gulp.src(SCSS_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
}

let buildTsBundle = () => {

  return browserify({
    basedir: ".",
    debug: true,
    entries: ["src/ts/browser-safe.ts"],
    cache: {},
    packageCache: {},
    sourceType: module
  })
    .plugin(tsify, { target: 'es6' })
    .transform(babelify, { extensions: ['.tsx', '.ts'] })
    .bundle()
    .pipe(source("xcelsior.js"))
    .pipe(gulp.dest("build/js/bundle"));
}

let buildTs = () => {
  return gulp.src(TS_PATH).pipe(ts({
    noImplicitAny: true,
    module: "commonjs",
    target: "es6",
    sourceMap: true,
    declaration: true,
    declarationMap: true,
    allowJs: true,
    esModuleInterop: false
  }))
    .pipe(gulp.dest('build/js/module'));
}



gulp.task('sass', function () {
  return buildSass();
});

gulp.task('ts', function () {
  return buildTs();
});


gulp.task('watch', () => {
  gulp.watch([SCSS_PATH, TS_PATH],
    gulp.parallel(
      buildTs,
      buildSass,
      buildTsBundle
    ))
}
);

