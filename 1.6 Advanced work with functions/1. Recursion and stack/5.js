/**
 * Вывод односвязного списка в обратном порядке
 * Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
 * 
 * Сделайте два решения: с использованием цикла и через рекурсию.
 */

 const printRevertList = (list) => {
  let tmp = list
  if ( !tmp.next ) {
    printList(next)
  }
  alert(tmp.value)
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(printRevertList(list))