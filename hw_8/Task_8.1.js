'use strict'

// Task 1.
/*
Имеется массив объектов (ниже). Ваше задание:
1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
   Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
   Перебирать каждый объект циклом for..in
5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
   `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
  */

  // 1.1.
  // Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта

  const characters = [
    { name: "Barney", age: 36 },
    { name: "Fred", age: 40 },
    { name: "Jack", age: 50 },
  ];

  characters.forEach((objectOfArray) => {
    console.log(Object.keys(objectOfArray));
  });

  // 1.2.   
  // Используя Object.values и метод forEach вывести в консоль значения каждого объекта

  const characters2 = [
    { name: "Barney", age: 36 },
    { name: "Fred", age: 40 },
    { name: "Jack", age: 50 },
  ];

  characters2.forEach((objectOfArray) => {
    console.log(Object.values(objectOfArray));
  });

// 1.3.
// Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
// Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)

  const characters3 = [
    { name: "Barney", age: 36 },
    { name: "Fred", age: 40 },
    { name: "Jack", age: 50 },
  ];

characters3.forEach(el => { // forEach для массива
    for (const [key, value] of Object.entries(el)) { // for...of для объекта
    console.log(`key = ${key}, value = ${value}`);
    }
    });

// 1.4.
// Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
// Перебирать каждый объект циклом for..in

const characters4 = [
    { name: "Barney", age: 36 },
    { name: "Fred", age: 40 },
    { name: "Jack", age: 50 },
  ];

  characters4.forEach(el => {
    for (const key in el) {
    console.log(`key = ${key}, value = ${el[key]}`);
    }
    });

// 1.5.
// Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
// `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
    name: '*',
    age: '*',
    salary: '*',
getInfo() {
    return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
 },
};
console.log(qa.getInfo());
