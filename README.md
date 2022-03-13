# PIED PIPER (тренировочный проект)

Идея сайта взята из курса [Веб-разработка для начинающих: HTML и CSS](https://stepik.org/course/38218/syllabus)  
с платформы [Stepik](https://stepik.org/)

Макет сайта находится [здесь](https://www.figma.com/file/BL7wdCOSIxYFu1uxctuVzg/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Pied-Piper?node-id=0%3A1)

## Цель проекта

Сделать первую работу для портфолио, а также изучить и отработать на несложной  
задаче следующие инструменты и технологии:
* Работа с Figma
* Адаптивная кроссбраузерная вёрстка (flexbox, grid)
* sass/scss
* Чистый JavaScript ***без фреймворков и библиотек***
* Разбиение кода на модули
* git
* webpack

## Дополнительно реализовано

Помимо вёрстки по макету проявил инициативу и добавил следующие фичи:
* Адаптивная вёрстка от 240px
* Бургер-меню для мобильных разрешений ***(полностью сделано самостоятельно)***
* Лёгкие визуальные эффекты

## Как всё устроено

* Генерируется пустой HTML-шаблон, подключается *main.js*
* Подгружаются общие стили страницы, шаблон настраивается (*common/common.js*)
* С помощью JavaScript на страницу подключаются блоки: хедер, футер и пять  
секций основного контента (папка *src/blocks*)
* Каждый блок содержит в своей папке собственный html-код, стилевой файл  
(sass), изображения (если таковые имеются) и файл с JavaScript-кодом, который  
всё это собирает и добавляет на страницу

## Чем обрабатывается

* Основное: **HtmlWebpackPlugin**, **MiniCssExtractPlugin**, **Babel**
* А также лоадеры для работы с разметкой, стилями и картинками.
* Кроссбраузерность: **postcss-loader + autoprefixer**

## Особенности

* Работа хедера обеспечивается тремя классами: *HeaderController*, *HeaderButton*  
и *HeaderHidingElement* (лежат в *src/utils/components*). В *HeaderButton* реализован  
простейший пример наследования классов
* Карточки в секции **team** свёрстаны не единым блоком, а добавляются динамически  
с помощью шаблона *team-card.html*

## Качество и производительность

* **Pixel Perfect:** проверяется на разрешении 1219px, скриншот макета для  
проверки наложением лежит в *src/vendor/images/tests*
* **Google Page Speed:** ***100%***, скриншот теста также в *src/vendor/images/tests*
* **W3C:** полностью валидный html без ошибок, скриншот там же - *src/vendor/images/tests*

## Контакты

Рассмотрю предложения о работе, постоянной или временной:
* galustoff.dan@yandex.ru
* [Вконтакте](https://vk.com/id645848247)
* [fl.ru](https://www.fl.ru/users/galustoffdan/portfolio/#/)
* [ХабрКарьера](https://career.habr.com/ch_m)

---