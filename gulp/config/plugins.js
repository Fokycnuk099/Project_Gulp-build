import replace from "gulp-replace" // поиск и замена
import browsersync from "browser-sync"//локальный сервер
import newer from "gulp-newer" // проверка обновления
import ifPlugins from "gulp-if"// для разделения кода на разработку и продакш

//экспортируем объект
export const plugins = {
    replace: replace,
    browsersync: browsersync,
    newer: newer,
    if : ifPlugins
}