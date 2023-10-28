"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const userNumber = Number(prompt("Введите целое положительное число: "));
console.log(userNumber);

const tempSoten = Math.trunc(userNumber / 100);
const tempDesytkov = Math.trunc(userNumber / 10) % 10;
const tempEdinichek = userNumber % 10;

console.log(
  `Количетсво сотен: ${tempSoten}, количетсво десятков: ${tempDesytkov}, количетсво единиц: ${tempEdinichek}`
);
