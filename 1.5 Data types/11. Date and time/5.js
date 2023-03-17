/**
 * Последнее число месяца?
 * 
 * Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или
 * даже февральские 28/29.
 * 
 * Параметры:
 * - year – год из четырёх цифр, например, 2012.
 * - month – месяц от 0 до 11.
 * 
 * К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
 */
const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0));
alert(getLastDayOfMonth(2012, 1));
alert(getLastDayOfMonth(2013, 1));