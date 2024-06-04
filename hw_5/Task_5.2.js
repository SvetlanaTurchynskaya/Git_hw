'use strict';

/*
Task 1
  Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)
*/

let bytes = 16565846;
let result;

if (bytes < 1024) {
result = bytes + " bytes";
} else if (bytes < 1024 * 1024) {
result = (bytes / 1024).toFixed(1) + " Kb";
} else if (bytes < 1024 * 1024 * 1024) {
result = (bytes / (1024 * 1024)).toFixed(1) + " Mb";
} else if (bytes < 1024 * 1024 * 1024 * 1024) {
result = (bytes / (1024 * 1024 * 1024)).toFixed(1) + " Gb";
} else {
result = (bytes / (1024 * 1024 * 1024 * 1024)).toFixed(1) + " Tb";
}

console.log(result); 

/*
Task 2.2
  Сделать из "*" в консоли равнобедренный треугольник и ромб
*/

rows = 5;
triangle = "";
 
for (let n = 1; n <= rows; n++) {
   for (let space = 1; space <= rows - n; space++) {
    triangle += " ";
   }
 
   for (let num = 1; num <= 2 * n - 1; num++) {
    triangle += "*";
   }
   triangle += "\n";
}
console.log(triangle);


const height = 5; 
let rhombus = '';

for (let i = 0; i < height; i++) {
rhombus += ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

for (let i = height - 2; i >= 0; i--) {
rhombus += ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(rhombus);


/*
Task 2.3
  Вам нужно вывести в консоль числа от 1 до 100.
  Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
  Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
  Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
  Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
  console.log(`Число ${i} делится и на 3, и на 5`);
  } else if (i % 3 === 0) {
  console.log(`число ${i} - делится на 3`);
  } else if (i % 5 === 0) {
  console.log(`число ${i} - делится на 5`);
  } else {
  console.log(i);
  }
  }

/*
Task 2.4
  Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
*/

let sentence = "I am super engineer";
sentence = sentence.toLowerCase().split(" ");
console.log(sentence); // [ 'i', 'am', 'super', 'engineer' ]

for (let i = 1; i < sentence.length; i++) {
sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substring(1);
}

let camelCaseSentence = sentence.join("");
console.log(camelCaseSentence); // iAmSuperEngineer