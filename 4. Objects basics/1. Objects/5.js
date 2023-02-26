/**
 * Умножаем все числовые свойства на 2
 * 
 * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
 * Например:
 * let menu = { // до вызова функции
 *   width: 200,
 *   height: 300,
 *   title: "My menu"
 * };
 * multiplyNumeric(menu);
 * menu = { // после вызова функции
 *   width: 400,
 *   height: 600,
 *   title: "My menu"
 * };
 * 
 * Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
 * P.S. Используйте typeof для проверки, что значение свойства числовое.
 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const isNumber = (val) => {
  if (typeof val === 'number') {
    return true;
  }
  return false;
}

const multiplyNumeric = (menu) => {
  for (key in menu) {
    if (isNumber(menu[key])) {
      menu[key] *= 2;
    }
  }
} 