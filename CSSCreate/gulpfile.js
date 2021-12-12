var gulp  = require("gulp");
var sass = require('gulp-sass');

// Sassのコンパイル処理
gulp.task('sass', function(){
  console.log("Hello World");
  //scssディレクトリの指定
  gulp.src('./css/scss/*.scss')
  //コンパイル実行
  .pipe(sass({style : 'expanded'})) //出力形式の種類　#nested, compact, compressed, expanded.
  //出力先の指定
  .pipe(gulp.dest('css'));
});