import fileinclude from "gulp-file-include"; //поможет собрать из частей целую html страницу
import webpHtmlNosvg from "gulp-webp-html-nosvg";
export const html = () => {
    return app.gulp.src(app.path.src.html) // получили файлы
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fileinclude()) // собираем единый файл из частей html
    .pipe(app.plugins.replace(/@img\//g, 'images/'))//ищем все вхождения @img и меняем на images/
    .pipe(webpHtmlNosvg())
    .pipe(app.gulp.dest(app.path.build.html)) // перенесли файлы
    .pipe(app.plugins.browsersync.stream())//обновление браузера
  
}