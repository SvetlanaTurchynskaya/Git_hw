'use strict';

// Task 2.

/*
2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/

const maxAndAvgPrise = (check = []) => {
  const total = check.reduce((total, prise) => total + prise, 0);
  const avg = total / check.length;

  return `Total price: ${total}, average product price: ${Math.round(avg)}`;
};

const prices = [
  64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
  9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
];

console.log(maxAndAvgPrise(prices)); 

/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/

function vowelCounter(word = []) {
    const vowels = 'aeiou'; 
    return [...word].reduce((counter, letter) => vowels.includes(letter) ? counter ++ : counter, 0);
    }
    
    function sortByVowelCount(words) {
    return words.sort((a, b) => vowelCounter(a) - vowelCounter(b));
    }
    
    const wordsArray = ["formatNumber", "test", "QWER"];
    console.log(sortByVowelCount(wordsArray));

/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
*/

function findCouple(arrayOfBrackets) {
    return arrayOfBrackets.reduce((acc, bracket) => {
    
    if (bracket === '(') {
    return acc + 1; 
    } else if (bracket === ')') {
    return acc - 1; 
    }
    return acc;
    }, 0);
    }
    
    const arrayOfBrackets = ['(', ')', '(', ')', ')']; // -1
    //const arrayOfBrackets = ['(', ')', '(', ')', ')', '(', ]; // 0
    
    console.log(findCouple(arrayOfBrackets));