/**
 * Создайте калькулятор
 * 
 * Создайте объект calculator (калькулятор) с тремя методами:
 *     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
 *     sum() (суммировать) возвращает сумму сохранённых значений.
 *     mul() (умножить) перемножает сохранённые значения и возвращает результат.
 * 
 * let calculator = {
 *   // ... ваш код ...
 * };
 * 
 * calculator.read();
 * 
 * alert( calculator.sum() );
 * alert( calculator.mul() );
 */

let calculator = {
  read: () => {
    this.numberOne = +prompt('Первое число?', 0);
    this.numberTwo = +prompt('Второе число?', 0)
  },
  sum: () => {
    return this.numberOne + this.numberTwo;
  },
  mul: () => {
    return this.numberOne * this.numberTwo;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );