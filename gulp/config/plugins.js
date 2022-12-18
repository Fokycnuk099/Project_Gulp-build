import replace from "gulp-replace" // поиск и замена
import browsersync from "browser-sync"//локальный сервер

//экспортируем объект
export const plugins = {
    replace: replace,
    browsersync: browsersync
}