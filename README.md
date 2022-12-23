# Project_Gulp-build
Gulp сборка
В файле package.json добавлено несколько режимов для сборки проекта:
1. npm run dev - выполняет сборку без сжатий и оптимизации, также запускает локальный сервер с сайтом,
2. npm run build - собирает проект, сжатие, оптимизация кода и картинок. Без отображения проекта в браузере,
3. npm run zip - архивирует папку результат,
4. npm run svgSprive - создает SVG спрайт
Основные файлы и папки:
1.gulpfile.js - файл с сценарием выполнения кода,
2. path.js - настройка путей к файлам,
3. plagins.js - импорт нужных плагинов,
4. папка с tasks - js файлы с определенными задачами (копирования, конвертирование шрифтов и т.д),
5. папка src - папка с исходными файлами (шрифты, HTML, картинки, js, scss, svgicons)
В проекте осуществляется конвертирование шрифтов с otf в ttf, далее из ttf в woff.
В папку src/fonts добавляет шрифт с расширением otf или ttf.
Файл формируется один раз (fonts.scss), если в проект будут добавлены новые шрифты, то данный файл нужно удалить и заново
через npm run dev создать.
В папке src/html находятся части для формирования html страниц (header, footer, head).
Подключение данных чайсте в файл index.js выглядит следующим образом:
 @@include('html/header.html',{})
