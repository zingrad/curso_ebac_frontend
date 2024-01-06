const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 


function buildStyles() {
    return gulp.src('./src/styles/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('./dist/styles'));
  };
  
  

   
  gulp.task('watch', function(){
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false },buildStyles);
  })
 
  function imageminBuild (cb){
    gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        cb();
}
;

exports.default = gulp.parallel([buildStyles,imageminBuild]);
