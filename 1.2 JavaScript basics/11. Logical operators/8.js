/**
 * Вопрос об "if"
 * 
 * Какие из перечисленных ниже alert выполнятся?
 * Какие конкретно значения будут результатами выражений в условиях if(...)?
 */
if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // не выполнится 
if (null || -1 && 1) alert( 'third' ); // выполнится

// Итоговый вывод: first third