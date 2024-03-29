/**
 * Вывод односвязного списка
 * Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
 * 
 * let list = {
 *   value: 1,
 *   next: {
 *     value: 2,
 *     next: {
 *       value: 3,
 *       next: {
 *         value: 4,
 *         next: null
 *       }
 *     }
 *   }
 * };
 * 
 * Напишите функцию printList(list), которая выводит элементы списка по одному.
 * 
 * Сделайте два варианта решения: используя цикл и через рекурсию.
 * 
 * Как лучше: с рекурсией или без?
 * Ответ: 
 */
const printList = (list) => {
  let tmp = list
  alert(tmp.value)
  if ( tmp.next ) {
    printList(next)
  }
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

console.log(printList(list))