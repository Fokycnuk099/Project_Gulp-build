//основной модуль
import gulp from "gulp";
//импорт путей
import {path} from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// передаем значение в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}
//импорт задач
import {copy} from "./gulp/tasks/copy.js";
import {del} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";

//наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);//параллельное выполнение нескольких задач

//построение сценариев выполнения задач (продакшн и разработка)
const dev = gulp.series(del, mainTasks, gulp.parallel(watcher, server));//метод выполняет задачи последовательно
// const dev = gulp.series(del, mainTasks, watcher);
// выполнение сценария по умолчанию
gulp.task('default', dev);