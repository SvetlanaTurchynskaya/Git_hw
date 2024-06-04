'use strict';

/*
Task 1
1. Создайте цикл, который выведет в консоль цифры от 10 до 0
*/

const age = 0;
let old = 10;
while (age <= old) {
  console.log(old);
  old--;
}

/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):)

  Для Оксаны и ее друзей: также реализовать циклом while
  Рекоммендация: попробуйте метод .repeat()
*/


rows = 5;
pattern = "";
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += ":)";
   }
   pattern += "\n";
}
console.log(pattern);


let smile = ":)";
let count = 1;

while (count <= 5) {
console.log(smile.repeat(count));
count++;
}