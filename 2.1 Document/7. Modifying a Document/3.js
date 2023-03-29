/**
 * Почему остаётся "aaa"?
 * 
 * В примере ниже вызов table.remove() удаляет таблицу из документа.
 * 
 * Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
 * 
 * Почему так происходит?
 * <table id="table">
 *   aaa
 *   <tr>
 *     <td>Тест</td>
 *   </tr>
 * </table>
 * 
 * <script>
 *   alert(table); // таблица, как и должно быть
 * 
 *   table.remove();
 *   // почему в документе остался текст "ааа"?
 * </script>
 * Ответ: внутри <table> не может быть текста: в соответствии со спецификацией допускаются только табличные теги. Поэтому браузер показывает "aaa" до <table>.
 */