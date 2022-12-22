import replace from "gulp-replace" // поиск и замена
import plumber from "gulp-plumber"// обработка ошибок
import notify from "gulp-notify"//сообщение подсказка
import browsersync from "browser-sync"//локальный сервер
import newer from "gulp-newer" // проверка обновления
import ifPlugins from "gulp-if"// для разделения кода на разработку и продакш

//экспортируем объект
export const plugins = {
    replace: replace,
    browsersync: browsersync,
    plumber: plumber,
    notify: notify,
    newer: newer,
    if : ifPlugins
}