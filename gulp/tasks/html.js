import fileinclude from "gulp-file-include"; //поможет собрать из частей целую html страницу
export const html = () => {
    return app.gulp.src(app.path.src.html) // получили файлы
    .pipe(fileinclude()) // собираем единый файл из частей html
    .pipe(app.plugins.replace(/@img\//g, 'images/'))//ищем все вхождения @img и меняем на images/
    .pipe(app.gulp.dest(app.path.build.html)) // перенесли файлы
    .pipe(app.plugins.browsersync.stream())
  
}