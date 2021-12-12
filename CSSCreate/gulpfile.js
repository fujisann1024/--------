var gulp = require("gulp");
var sass = require('gulp-sass')(require("sass"));

//タスクの登録
gulp.task("default",function(){
    gulp.src("sass/**/*.scss")             //呼び込むファイル以下のファイル
    .pipe(sass({outputStyle: 'expanded'})) //呼び込んだファイルに行う処理を記述
    .pipe(gulp.dest("./css"))               //srcで取得したファイルに処理を記述
})
