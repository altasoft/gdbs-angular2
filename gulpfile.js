/// <binding  ProjectOpened='watch' />
// AfterBuild='clean, compile, min:js' Clean='clean'

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    less = require('gulp-less'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    browserify = require('gulp-browserify'),

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
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";



gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);



gulp.task('browserify', function () {

    gulp.src('./wwwroot/lib/ng2-cookies/ng2-cookies.js')
        .pipe(browserify({
            insertGlobals: false,
            debug: false
        })).pipe(gulp.dest('./build'));
});

gulp.task('compile-ts', function () {

    var tsOutputPath = './wwwroot/js/';

    var sourceTsFiles = [paths.ts, paths.dts];


    var tsResult = gulp.src(sourceTsFiles)
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


gulp.task('compile-html', function () {
    gulp.src(paths.html)
        .pipe(gulp.dest('./wwwroot/html'));
});

gulp.task('compile', ['compile-ts', 'compile-less']);


gulp.task('watch', function () {
    gulp.watch([paths.ts], ['compile-ts']);
    gulp.watch([paths.less], ['compile-less']);
    gulp.watch([paths.html], ['compile-html']);
});



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


