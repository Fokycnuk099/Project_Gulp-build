import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "Fonts",
            message: "Error: <%= error.message %>"
        })
    ))
    //конвертация в ttf
    .pipe(fonter({
        formats: ['ttf']
    }))
    //выгрузка в основную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
    //ищем файлы шрифтов ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "Fonts",
            message: "Error: <%= error.message %>"
        })
    ))
    //конвертация в woff
    .pipe(fonter({
        formats: ['woff']
    }))
    //выгрузка в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    //ищем файлы ttf
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
    //конвертируем в woff2
    .pipe(ttf2woff2())
    //выгружаем в папку с результатом
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}
export const fontStyle = () => {
    //файл стилей подключения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    //проверка существования файла шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles){
        if (fontsFiles){
            //существует ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)){
                //если нет, создаем
                fs.writeFile(fontsFile,'',cb);
                let newFileOnly;
                for (var i=0; i<fontsFiles.length;i++){
                    //запись подключения шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName){
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin'){
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight'){
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light'){
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium'){
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold'){
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold'){
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold'){
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black'){
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile,`@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;}\r\n`, cb);
                            newFileOnly = fontFileName;
                        }
                    }
                    }
                }
            });
    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}