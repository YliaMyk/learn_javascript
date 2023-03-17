/**
 * Создайте калькулятор при помощи конструктора, new Calculator
 * 
 * Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
 *     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
 *     sum() возвращает сумму этих свойств.
 *     mul() возвращает произведение этих свойств.
 * 
 * Например:
 * 
 * let calculator = new Calculator();
 * calculator.read();
 * 
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 */
function Calculator() {
  this.read = () => {
    this.numberOne = +prompt('Первое число?', 0);
    this.numberTwo = +prompt('Второе число?', 0);
  };

  this.sum = () => {
    return this.numberOne + this.numberTwo;
  };

  this.mul = () => {
    return this.numberOne * this.numberTwo;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );