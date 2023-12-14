const gulp = require('gulp');
const imagemin = require( 'gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');


function comprimirImagem(callback){
    gulp.src('source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images')),
    callback()
    
   
}

function comprimirJs(callback) {
        return   gulp.src('source/scripts/*.js')
        .pipe(obfuscate({ replaceMethod: obfuscate.ZALGO }))
        .pipe(uglify()) 
        .pipe(  gulp.dest('./build/scripts')),
        callback()
}



function buildStyles() {
    return gulp.src('./source/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'));
  };
  
  exports.comprimirJs = gulp.series(comprimirJs);

  exports.comprimirImagem = gulp.series(comprimirImagem);

  exports.default = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(buildStyles));
    gulp.watch('source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimirJs));
    gulp.watch('source/images/*', {ignoreInitial: false}, gulp.series(comprimirImagem));
   };
  