import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js)
    .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development', // режим разработчика
        output: {
            filename: 'app.min.js' //файл результата
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}