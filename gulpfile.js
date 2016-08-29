var gulp = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create(),
minifyCss = require('gulp-minify-css'),
htmlmin = require('gulp-htmlmin'),
imagemin = require('gulp-imagemin'),
clean = require('gulp-clean'),
browserify = require('gulp-browserify'),
autoprefixer = require('gulp-autoprefixer');
//如果要让“不兼容Browserify”（其实是不兼容CommonJS）的JavaScript模块（如插件）也能为Browserify所用
//var browserifyShim = require('browserify-shim');

//编译压缩sass 
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
        
});

//编译压缩sass并合并css
gulp.task('concatCss', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 6 versions']
        }))
        .pipe(minifyCss())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});

//压缩图片
gulp.task('imagemin', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

//压缩html
gulp.task('minifyHtml', function() {
    gulp.src('src/html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
        
});

// 压缩js
gulp.task('uglifyJs', function() {
    gulp.src(['src/js/index.js'])
        .pipe(browserify())
        // .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
        
});

gulp.task('concatJs', function() {
    gulp.src(['src/js/index.js'])
        .pipe(browserify())
        // .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
        
});

gulp.task('clean', function () {
    gulp.src('dist/css/*.css', {read: false})
        .pipe(clean());
    gulp.src('dist/js/*.js', {read: false})
        .pipe(clean());
    gulp.src('dist/images/*', {read: false})
        .pipe(clean());
    gulp.src('dist/*.html', {read: false})
        .pipe(clean());   
});

gulp.task('watch', function() {

    // 建立浏览器自动刷新服务器
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    // 预处理
    gulp.watch('src/sass/**', ['concatCss']);
    gulp.watch('src/js/**', ['uglifyJs']);
    gulp.watch('src/html/**', ['minifyHtml']);
    gulp.watch('src/images/**', ['imagemin']);

    // 自动刷新
    gulp.watch(['dist/**'], function() {
        browserSync.reload();
    });
});

//如果需要合并css的话运行gulp concat
gulp.task('concat',['clean','concatCss','concatJs','imagemin','minifyHtml','watch']);

//否则只需运行gulp
gulp.task('default',['clean','imagemin','concatCss','uglifyJs','minifyHtml','watch']);