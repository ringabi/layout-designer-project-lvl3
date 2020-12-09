var gulp = require('gulp');

var sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    svgSprite = require('gulp-svg-sprite'),
    concat = require('gulp-concat');

sass.compiler = require('node-sass');

// Объединение и компиляция SASS-файлов в CSS-файл dist/style.css
gulp.task('sass', function () {
	  return gulp.src('app/styles/scss/*.scss')
	    .pipe(concat('style.scss'))
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('dist/'));
});

// Слежение за изменёнными файлами *.scss и *.html
//gulp.task('watch', function () {
//	  gulp.watch('./app/styles/scss/**/*.scss', ["sass"]);
//	  gulp.watch('./*.html', ["html"]);
//});

// Преобразование файла app/html/index.pug в файл ./index.html
gulp.task('html', function buildHTML() {
  return gulp.src('app/html/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
});

// Преобразование файла app/html/chat.pug в файл ./chat.html
gulp.task('html-chat', function buildHTML() {
  return gulp.src('app/html/chat.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
});

// Запуск тасков по умолчанию
//gulp.task('default', ['html', 'sass']);

//function defaultTask(cb) {
//  console.log('Привет, я твой первый таск!');
//  cb();
//}
//
//exports.default = defaultTask
