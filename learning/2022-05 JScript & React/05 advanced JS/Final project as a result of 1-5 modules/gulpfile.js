// const gulp = require('gulp'); // without restructurisation
const {src, dest, watch, series, parallel} = require('gulp'); // restructurisation
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('node-sass'));
sass.compiler = require('node-sass');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const fileInclude = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static Server + watching scss/sass/css/html files
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    watch('./dist/**/*.html').on('change', browserSync.reload);
    // watch('./dist/**/*.{sass,scss,css}').on('change', browserSync.reload);
    // watch('./dist/**/*.js').on('all', browserSync.reload);
    // watch('./dist/fonts/**/*').on('all', browserSync.reload);
    // watch('./dist/img/**/*').on('all', browserSync.reload);
    // watch('./dist/icons/**/*').on('all', browserSync.reload);
};


// // Compile sass into CSS & auto-inject into browsers
// const cssGo = () => {
//     return src('./src/**/*.{scss,sass,css}')
//         .pipe(sass())
//         .pipe(dest('./dist'));
// };
// // gulp.task('sass', function() {
// //     return gulp.src("app/scss/*.scss")
// //         .pipe(sass())
// //         .pipe(gulp.dest("app/css"))
// //         .pipe(browserSync.stream());
// // });
const styles = () => {
    return src('./src/scss/**/*.+(scss|sass)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('./dist/css'))
        .pipe(dest('./src/css'))
        .pipe(browserSync.stream());
};

// // HTML processing
// const htmlGo = function () {
//     return src('./src/**/*.html') // *.html // *.* // *.{html,css}
//                                // src('./src/**/*.html', './src/**/*.js')
//                                // EXCLUDE *.JS >> src('./src/**/*.html', '!./src/**/*.js')
//                                // directories:
//                                // ** // {folder1,folder2,folder3}
//         .pipe(fileInclude())
//         .pipe(size({title: 'before compression: '}))
//         .pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(size({title: 'after compression: '}))
//         .pipe(dest('./dist'));
// };
const html = () => {
    return src('./src/*.html')
        .pipe(fileInclude())
        .pipe(size({title: 'Before compression: '}))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({title: 'after compression: '}))
        .pipe(dest('./dist/'));
};

// JScripts precessing
const scripts = () => {
    return src('./src/js/*.js')
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream());
};

// FONTS processing
const fonts = () => {
    return src('./src/fonts/**/*')
        .pipe(dest('./dist/fonts'))
        .pipe(browserSync.stream());
};

// IMG processing EXCLUDE icons
const images = () => {
    return src('./src/img/**/*') // , '!src/img/icons/**/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
        .pipe(browserSync.stream());
};

// ICONS processing
const icons = () => {
    return src('./src/icons/**/*')
        .pipe(dest('./dist/icons'))
        .pipe(browserSync.stream());
};

// watching for html-css-.. and other files
const watcher = () => {
    watch('./src/**/*.html').on('change', html);
    watch('./src/scss/**/*.{sass,scss,css}').on('change', styles);
    watch('./src/js/*.js').on('all', scripts);
    watch('./src/fonts/**/*').on('all', fonts);
    watch('./src/img/**/*').on('all', images);
    watch('./src/icons/**/*').on('all', icons);
};


////// TASKS
// tasks export
exports.watch = watcher;
exports.html = html;
exports.css = styles;

// assembly
// using series -> parallel for parallel launch (order is unimportant)
exports.go = series(
    parallel(styles, html), 
    parallel(scripts, fonts, images, icons),
    parallel(watcher, server)
);