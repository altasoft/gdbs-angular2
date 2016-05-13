/// <binding ProjectOpened='watch' />

const
    gulp = require("gulp"),
    file = require('gulp-file'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    embedTemplates = require('gulp-angular2-embed-templates'),
    embedSass = require('gulp-angular2-embed-sass'),
    rimraf = require("rimraf"),
    project = require("./project.json"),
    ext_replace = require('gulp-ext-replace')



if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}


var CompanyName = 'AltaSoft'

var config = {
    source: {
        tsbase: './App',

        ts: './App/**/*.ts',
        dts: './typings/**/*.d.ts',
        html: './App/**/*.html',
        sass: './App/**/*.ts.scss',
        common_sass: './Common/Styles/**/*.scss',
        lang: './Localization/**/*.json',
        modules: './App/' + CompanyName + '/*.ts'
    },
    compiled: {
        js: './wwwroot/js/',
        jslib: './wwwroot/js/lib/',
        css: './wwwroot/css/',
        dts: './wwwroot/js/',
        lang: './wwwroot/lang/',
        modules: './node_modules/' + CompanyName + '/'
    },
    ignore: ['!node_modules/**', '!bin/**']
}



gulp.task("clean", function (cb) {
    rimraf(config.compiled.lang, cb);
});

gulp.task('compile-ts', function () {

    var embedConfig = {
        sourceType: 'ts',
        minimize: {
            empty: true,                      // KEEP empty attributes
            ssi: true,                        // KEEP Server Side Includes
            conditionals: true,               // KEEP conditional internet explorer comments
            spare: false,                     // KEEP redundant attributes
            quotes: true,                     // KEEP arbitrary quotes
        }
    }


    var tsResult = gulp.src([config.source.ts, config.source.dts].concat(config.ignore), { base: config.source.tsbase })
        .pipe(embedSass())
        .pipe(embedTemplates(embedConfig))
        .pipe(sourcemaps.init())
        .pipe(tsc({
            "typescript": require('typescript'),
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": true,
            "noImplicitAny": false,
            "outFile": "app.js"
        }));


    tsResult.dts.pipe(gulp.dest(config.compiled.dts));

    return tsResult.js
                    .pipe(sourcemaps.write('../js/', { sourceRoot: '/Source', debug: true }))
                    .pipe(gulp.dest(config.compiled.js));
});

gulp.task('compile-modules', function () {

    gulp.src([config.source.modules])
        .pipe(ext_replace('.d.ts'))
        .pipe(gulp.dest(config.compiled.modules));

});

gulp.task('compile-sass', function () {

    gulp.src([config.source.common_sass].concat(config.ignore))
        .pipe(sass())
        .pipe(gulp.dest(config.compiled.css))

});

gulp.task('compile-json', function () {
    gulp.src([config.source.lang].concat(config.ignore)).pipe(gulp.dest(config.compiled.lang));
});

gulp.task('compile-lib', function () {

    if (!project.lib || !project.lib.length) return

    var jsFiles = project.lib.filter(function (item) {
        return item.endsWith('.js') || item.endsWith('.js.map') || item.endsWith('.map')
    })

    var cssFiles = project.lib.filter(function (item) {
        return item.endsWith('.css') || item.endsWith('css.map')
    })

    gulp.src(jsFiles)
        .pipe(gulp.dest(config.compiled.jslib))

    gulp.src(cssFiles)
        .pipe(gulp.dest(config.compiled.css))
})

gulp.task('compile', ['compile-modules', 'compile-ts', 'compile-sass', 'compile-json', 'compile-lib']);


gulp.task('watch', ['compile'], function () {
    gulp.watch([config.source.ts], ['compile-ts']);
    gulp.watch([config.source.html], ['compile-ts']);
    gulp.watch([config.source.sass], ['compile-ts']);
    gulp.watch([config.source.lang], ['compile-json']);
    gulp.watch([config.source.common_sass], ['compile-sass']);
    gulp.watch([config.source.modules], ['compile-modules']);
    gulp.watch(['./project.json'], ['compile-lib']);
});


gulp.task('version-generator', function () {

    var content = 'window.ClientVersion=' + Date.now()

    file('version.js', content)
        .pipe(gulp.dest(config.compiled.js))
})