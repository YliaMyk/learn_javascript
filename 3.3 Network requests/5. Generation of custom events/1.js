/**
 * Почему нам нужен Origin?
 * Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.
 * 
 * Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:
 * 
 * Accept: 
 * Accept-Charset: utf-8
 * Accept-Encoding: gzip,deflate,sdch
 * Connection: keep-alive
 * Host: google.com
 * Origin: http://javascript.info
 * Referer: http://javascript.info/some/url
 * 
 * Как вы можете видеть, присутствуют и Referer, и Origin.
 * 
 * Вопросы:
 * 
 *     Почему нужен Origin, если Referer содержит даже больше информации?
 *     Возможно ли отсутствие Referer или Origin, или это неправильно?
 * 
 * Ответ
 * Origin, потому что иногда Referer отсутствует. Например, когда
 * мы запрашиваем через fetch HTTP-страницу с HTTPS (менее безопасный 
 * доступ с более безопасного), то Referer нет.
 * 
 * Content Security Policy (политика безопасности содержимого)
 * может запретить отправление Referer.
 */