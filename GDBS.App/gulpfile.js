﻿/// <binding AfterBuild='compile' ProjectOpened='watch, live-server' />

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    less = require('gulp-less'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    browserify = require('gulp-browserify'),
    gls = require('gulp-live-server'),
    embedTemplates = require('gulp-angular-embed-templates2'),

    path = require('path'),
    rimraf = require("rimraf"),
    project = require("./project.json"),
    tsProject = tsc.createProject('tsconfig.json');



var paths = {
    webroot: "./" + project.webroot + "/"
};

paths.ts = './Client/**/*.ts';
paths.dts = './Client/**/*.d.ts';
paths.less = './Client/**/*.less';
paths.html = './Client/**/*.html';
paths.json = './Localization/**/*.json';
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";


gulp.task('live-server', function () {
    var server = gls.static('wwwroot', 8000); //equals to gls.static('public', 3000);
    server.start();
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task('compile-json', function () {
    gulp.src(paths.json).pipe(gulp.dest('./wwwroot/lang/'));
});

gulp.task("clean", ["clean:js", "clean:css"]);


gulp.task('compile-ts', function () {

    var tsOutputPath = './wwwroot/js/';

    var sourceTsFiles = [paths.ts, paths.dts];

    var embedConfig = {
        sourceType: 'ts',
        minimize: {
            empty: true,                      // KEEP empty attributes
            ssi: true,                        // KEEP Server Side Includes
            conditionals: true,               // KEEP conditional internet explorer comments
            spare: false,                      // KEEP redundant attributes
            quotes: true,                     // KEEP arbitrary quotes
        }
    }

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(embedTemplates(embedConfig))
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

    tsResult.dts.pipe(gulp.dest(tsOutputPath));

    return tsResult.js
                    .pipe(sourcemaps.write('.', { sourceRoot: '/Source', debug: true }))
                    .pipe(gulp.dest(tsOutputPath));
});

gulp.task('compile-less', function () {
    gulp.src(paths.less)
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/css'));
});


//gulp.task('compile-html', function () {
//    gulp.src(paths.html)
//        .pipe(gulp.dest('./wwwroot/html'));
//});

gulp.task('compile', ['compile-ts', 'compile-less', 'compile-json', 'compile-lib']);

gulp.task('watch', ['compile'], function () {
    gulp.watch([paths.ts], ['compile-ts']);
    gulp.watch([paths.less], ['compile-less']);
    gulp.watch([paths.html], ['compile-ts']);
    gulp.watch([paths.json], ['compile-json']);
    gulp.watch(['./project.json'], ['compile-lib']);
});

gulp.task('compile-lib', function () {

    if (project.libjs) {
        gulp.src(project.libjs, { base: "." })
            .pipe(concat('lib.js'))
            .pipe(gulp.dest("./wwwroot/js/"));
    }

    if (project.libcss) {
        gulp.src(project.libcss, { base: "." })
            .pipe(concat('lib.css'))
            .pipe(gulp.dest("./wwwroot/css/"));
    }
})


gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);


