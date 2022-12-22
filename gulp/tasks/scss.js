import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';  // сжатие CSS файла
import autoprefixer from 'gulp-autoprefixer';// добавление вендорных префиксов 
import groupCssMediaQueries from 'gulp-group-css-media-queries';// группировка медиа запросов
const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
    .pipe(
        app.plugins.if(
            app.isBuild,
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SCSS",
                    message: "Error: <%= error.message %>"
                })
            )
        )
    )
    .pipe(app.plugins.replace(/@img\//g, '../images/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true, // включение поддержки грид
                overrideBrowserslist: ["last 3 versions"],// количество версий бразуера от новой
                cascade:true
            })
        ))
    // .pipe(app.gulp.dest(app.path.build.css)) не сжатый дубль файла стилей
    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))//выгрузка в итоговую папку
    .pipe(app.plugins.browsersync.stream()) // обновляем браузер
}