//основной модуль
import gulp from "gulp";
//импорт путей
import {path} from "./gulp/config/path.js";
//импорт общих плагинов
import {plugins} from "./gulp/config/plugins.js";

// передаем значение в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}
//импорт задач
import {copy} from "./gulp/tasks/copy.js";
import {del} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
//наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images);//параллельное выполнение нескольких задач

//построение сценариев выполнения задач (продакшн и разработка)
const dev = gulp.series(del, mainTasks, gulp.parallel(watcher, server));//метод выполняет задачи последовательно
const build = gulp.series(del, mainTasks);
//экспорт сценариев
export {dev}
export {build}
// выполнение сценария по умолчанию
gulp.task('default', dev);