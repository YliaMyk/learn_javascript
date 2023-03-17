/**
 * Сделать первый символ заглавным
 * 
 * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
 * 
 * Например:
 * ucFirst("вася") == "Вася";
 */
const ucFirst = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася"));