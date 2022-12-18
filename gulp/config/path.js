//получение имени папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

// информация о пути к той или инной папке проекта
export const path = {
    build: {// папка с результатом
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/` //перенести сюда файлы с src в папку с результатом
    }, 
    src: { //исходные файлы
        //настройка путей
        html: `${srcFolder}/*.html`, //содержимое папки не копируется в результат, отслеживаем файлы в корне
        files: `${srcFolder}/files/**/*.*` //srcFolder папка с исходниками, files из нее будут переносится файлы, ** проверка любых вложеных файлов в папке files, *.* любые файлы (название.расширение)
    }, 
    watch: {
        html: `${srcFolder}/**/*.html`, //наблюдаем за изменениями файлов в корне и в других папках исходника
        files: `${srcFolder}/files/**/*.*`
    }, //галп следит за папками и выполняет определенные действия, копирует в рабочую папку с исходной
    clean: buildFolder, 
    buildFolder: buildFolder, //папка с результатом
    srcFolder: srcFolder, //папка с исходниками
    rootFolder: rootFolder, //название текущей папки проекта
    ftp: `` //указание папки на удаленном сервере
}