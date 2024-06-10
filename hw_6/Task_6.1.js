/* 
Task.1
1. Создайте функцию getEmployeeInfo()
2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
4. Функция должна принимать 1 аргумент - имя сотрудника
5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
8. Если такое имя сотрудника в массиве не найдется - вернуть null
*/

function getEmployeeInfo(employeeName) { // Функция должна принимать 1 аргумент - имя сотрудника
    const employeeNames = ['Марина', 'Таня', 'Оля', 'Владислав', 'Сергей']; // массив имен сотрудников 5шт
    const employeeSalaries = [1000, 2000, 3000, 4000, 5000]; // Массив зарплат сотрудников 5 шт
    const index = employeeNames.indexOf(employeeName); // Поиск индекса сотрудника в массиве имен
    
    if (index !== -1) { // Проверка наличия сотрудника в массиве
    const employeeNewInfo = []; // Создание нового массива для возврата
    employeeNewInfo.push(employeeNames[index], employeeSalaries[index]); // Добавление имени и зарплаты в массив
    return employeeNewInfo; // Возврат массива с информацией о сотруднике
    } else {
    return null; // Возврат null, если сотрудник не найден
    }
    }
    
    console.log(getEmployeeInfo('Dfcz')); // null
    console.log(getEmployeeInfo('Марина')); // [ 'Марина', 1000 ]
   
/* 
Task.2
1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с  наибольшим количеством букв. 
Если таких слов несколько - выводит их все.

3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

// 2.1. 

function getMySetPizza(myPizzas) {
    const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
    let returnUniquePizzas = [];
    
    for (let pizza of myPizzas) {
    if (competitorPizzas.indexOf(pizza) === -1) {
        returnUniquePizzas.push(pizza);
    }
    }
     return returnUniquePizzas.length > 0 ? returnUniquePizzas : null;
    }

    console.log(getMySetPizza(['Peperoni', '4 seasons',  'Barbeque', 'Hawai']));
    console.log(getMySetPizza(['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']));

// 2.2. Функция для поиска слова с наибольшим количеством букв:

function longestWord(sentence) {
    const words = sentence.split(' ');
    const maxLength = Math.max(...words.map(word => word.length));
    const longestWords = words.filter(word => word.length === maxLength);
    console.log(longestWords.join(', '));
    }
    longestWord('hghfgdfdsfsd jhg hgfd') // hghfgdfdsfsd

// 2.3. Функция для удаления дубликатов из массива чисел:

function uniqueNumbers(numbers) {
return [...new Set(numbers)];
}
console.log(uniqueNumbers([6666, 777, 777])); // [ 6666, 777 ]

// 2.4. Функция для проверки, является ли слово палиндромом:

function isPalindrome(word) {
return word === word.split('').reverse().join('');
}
console.log(isPalindrome('шалашф')); // false
console.log(isPalindrome('шалаш')); // true

/* 
Task.3
5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
    и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
    Пример: aabc => bbc => cc => d
*/