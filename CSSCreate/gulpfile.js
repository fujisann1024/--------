const {src, dest, series} = require("gulp");
var sass = require('gulp-sass')

// Sassのコンパイル処理
const sass_compile = function(){
    return src('css/scss/**/*.scss')
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(dest('css'))
}

// タスクを実行する
exports.default = series(sass_compile);