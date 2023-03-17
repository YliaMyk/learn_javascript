/**
 * Повторный bind
 * 
 * Можем ли мы изменить this дополнительным связыванием?
 * 
 * Что выведет этот код?
 * 
 * function f() {
 *   alert(this.name);
 * }
 * 
 * f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
 * 
 * f();
 */
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
f();