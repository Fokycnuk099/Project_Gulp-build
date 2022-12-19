//получение имени папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

// информация о пути к той или инной папке проекта
export const path = {
    build: {// папка с результатом
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/images/`,
        files: `${buildFolder}/files/` //перенести сюда файлы с src в папку с результатом
    }, 
    src: { //исходные файлы
        //настройка путей
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
       // svg: `${srcFolder}/images/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`, //содержимое папки не копируется в результат, отслеживаем файлы в корне (/pug)
        files: `${srcFolder}/files/**/*.*` //srcFolder папка с исходниками, files из нее будут переносится файлы, ** проверка любых вложеных файлов в папке files, *.* любые файлы (название.расширение)
    }, 
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //наблюдаем за изменениями файлов в корне и в других папках исходника (/pug)
        files: `${srcFolder}/files/**/*.*`
    }, //галп следит за папками и выполняет определенные действия, копирует в рабочую папку с исходной
    clean: buildFolder, 
    buildFolder: buildFolder, //папка с результатом
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //название текущей папки проекта
    ftp: `` //указание папки на удаленном сервере
}