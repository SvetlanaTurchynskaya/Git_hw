'use strict';

/* Task 2. 
2.1. Реализовать Task1 через switch
*/

const minAge_2 = 18;
const maxAge_2 = 60;
const age_2 = 61;

switch (true) {
    case (age_2 < minAge_2): {
        console.log("You don't have acsess couse your age is " + age_2 + ". It's less than ");
        break;
}
case (age_2 >= minAge_2 && age_2 < maxAge_2): {
    console.log('Welcome!');
    break;
}
case (age_2 > maxAge_2): {
    console.log('Keep culm and look culture channel');
    break;
}
default: {
    console.log('Technical work');
}
}

/*
2.2. 
Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. И если он не number - кидалась ошибка в консоль. Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
*/

const minAge_22 = 18;
const maxAge_22 = 60;
const age_22 = "aaa"; // 17, 18, 61, "2", "aaa"

if (typeof age_22 != 'number') {
    console.log('Enter valid Data')
} else if (age_22 < minAge_22) {
    console.log("You don't have acsess couse your age is " + age_22 + ". It's less than ");
} else if (age_22 >= minAge_22 && age_22 < maxAge_22) {
    console.log('Welcome!');
} else if (age_22 > maxAge_22) {
    console.log('Keep culm and look culture channel');
} else {
    console.log('Technical work');
}

/*
2.3
Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number
*/

const minAge_23 = 18;
const maxAge_23 = 60;
let age_23 = "2"; // 17, 18, 61, "2", "aaa"
const parsedAge = parseInt(age_23);

// Функция isNaN проверяет, является ли переданный параметр числом или нет. Вернет true, если параметр не является числом и false, если является. Как она работает: переданный параметр преобразуется к числу. Если это не число (строка, массив и т.п.), то он преобразуется в NaN. Ну, а isNaN проверяет - NaN у нас получился после преобразования или нет. А вот true преобразуется не к NaN, а к числу 1. 

if (isNaN(parsedAge)) {
    console.log('Enter valid Data');
} else if (age_23 < minAge_23) {
    console.log("You don't have acsess couse your age is " + age_23 + ". It's less than ");
} else if (age_23 >= minAge_23 && age_23 < maxAge_23) {
    console.log('Welcome!');
} else if (age_23 > maxAge_23) {
    console.log('Keep culm and look culture channel');
} else {
    console.log('Technical work');
}
