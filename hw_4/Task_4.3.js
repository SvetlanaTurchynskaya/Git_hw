/*
Task 3.
Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
*/


const minAge_3 = 18;
const maxAge_3 = 60;
const age_3 = prompt ('Enter your age');

const parsedAge = parseInt(age_3);

if (isNaN(parsedAge)) {
    alert('Enter valid Data');
} else if (age_3 < minAge_3) {
    alert("You don't have acsess couse your age is " + age_3 + ". It's less than ");
} else if (age_3 >= minAge_3 && age_3 < maxAge_3) {
    alert('Welcome!');
} else if (age_3 > maxAge_3) {
    alert('Keep culm and look culture channel');
} else {
    alert('Technical work');
}