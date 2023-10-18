"use strict";

// 1. Создайте переменную `num` и присвойте ей значение `123`.
// Выведите значение этой переменной в консоль.
const num = 123;
console.log(num);

// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на
// значение `7`, выведите переменную `а` в консоль.
let a = 5;
a = 7;
console.log(a);

// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`.
//  С помощью функции `console.log` выведите в консоль содержимое переменной `b`.
let b = 1 + 2 + 3;
console.log(b);

/* 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст. */
// fsfsf
// asd = 5;
// console.log(asd);
/* sfsfsf 
sfsf
sfsf*/

// Задание 3:
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18),
// а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.

const nowYear = 2023;
const foreverYoung = 18;
const myAge = 21;

const summ = nowYear + myAge;
const difference = nowYear - myAge;
const multiply = nowYear * myAge;
const split = nowYear / myAge;

// 2. Выведите в консоль все созданные переменные.
console.log(
  `Текущий год: ${nowYear}, Мой возраст: ${myAge}, Сумма их: ${summ}, Разность их: ${difference}, Умножение их: ${multiply}, Деление их: ${split}`
);
console.log(summ + difference + multiply + split);
console.log(summ, difference, multiply, split);

// 3. Сложите все созданные переменные и выведите результат в консоль.
const allSumMega = summ + difference + multiply + split;
console.log(allSumMega);

// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`.
// Найдите сумму значений этих переменных и выведите ее на экран.
const a5 = 0.1;
const b5 = 0.2;
const a25 = 0.1,
  b25 = 0.2;

let summ5 = a5 + b5;
console.log(summ5);
console.log(Math.trunc(summ5));
console.log(Math.trunc(summ5 * 10) / 10);

console.log(`round 23.454 => ${Math.round(23.444)}`);
console.log(`round 23.554 => ${Math.round(23.544)}`);
console.log(`floor 23.544 => ${Math.floor(23.544)}`);
console.log(`ceil 23.044  => ${Math.ceil(23.044)}`);
console.log(`trunc 23.544 => ${Math.trunc(23.544)}`);

console.log("round - нормальное окгруление");
console.log("floor - в меньшее всегда скгруление");
console.log("ceil  - в большее всегда скгруление");
console.log("trunc - просто отбрасывает знаки после запятой");
console.log("разница при отриацтельных знаениях");

console.log((a + b).toFixed(2));
// toFixed - поулчаем строку

const app = "5.333";
const app2 = "5.77ааыа7";
console.log(app);
console.log(app2);
console.log(Number.parseInt(app));
console.log(Number.parseInt(app2));
// берёт только целое число

console.log(Number.parseFloat(app));
console.log(Number.parseFloat(app2));
console.log(Number(app));
console.log(+app);

console.log(typeof NaN);
// иnumber

const c = 5;
console.log(-c);

// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.
const myName = "Aleks";
const mySecondname = "Kalinka";
console.log(`Моё имя ${myName} Моя фамилия ${mySecondname}`);

// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'.
// С помощью этих переменных и операции конкатенации строк выведите
//  в консоль строку 'javascript'.
const first = "java";
const second = "script";
const summKonkatenation = first + second;
console.log(first + second);
console.log(summKonkatenation);

// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'.
// С помощью этих переменных и операции конкатенации строк выведите
//  в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).
// Тайминг: 15 минут.

const welcomeHello = 'hello';
const worldTemp = 'world';
console.log(`Итоговая фраза последнего задания ${welcomeHello} ${worldTemp}`);
