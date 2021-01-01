var gulp = require('gulp');

var sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    svgSprite = require('gulp-svg-sprite'),
    concat = require('gulp-concat');

sass.compiler = require('node-sass');

// Объединение и компиляция SASS-файлов в CSS-файл dist/style.css
gulp.task('sass', function () {
	  return gulp.src('app/scss/*.scss')
	    .pipe(concat('style.scss'))
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('build/'));
});

gulp.task('svgSprite', function () {
  return gulp.src('app/images/icons/*.svg')
	.pipe(svgSprite({
	  mode: {
	    stack: {
	      sprite: "../sprite.svg"
	    }
	  },
	}
        ))
	.pipe(gulp.dest('build/images/sprite/'));
});

// Преобразование файла app/html/index.pug в файл ./build/index.html
gulp.task('html', function buildHTML() {
  return gulp.src('app/html/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./build/'))
});

// Преобразование файла app/html/chat.pug в файл ./build/chat.html
gulp.task('html-chat', function buildHTML() {
  return gulp.src('app/html/chat.pug')
  .pipe(pug())
  .pipe(gulp.dest('./build/'))
});
