export const server = (done) => {
    app.plugins.browsersync.init({ //запускаем сервер
        server: {
            baseDir: `${app.path.build.html}` //базовая папка откуда идет запуск файлов
        },
        notify: false,
        port: 3000,
    });
}