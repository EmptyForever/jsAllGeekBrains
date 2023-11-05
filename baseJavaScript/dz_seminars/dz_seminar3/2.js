"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), 

которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

/**
 * Функция salaryCalculate принимает зп до налогов
 * возвращает ЗП после уплаты налогов (чистая ЗП)
 * coefficient - процент НДФЛ, облагаемый доход
 * @param {number} num
 * @returns {number}
 */
function salaryCalculate(num) {
  const coefficient = 13;
  return (num / 100) * (100 - coefficient);
}

const userNum = prompt("Введите пожалуйста, число: ");
console.log(userNum);

const tempSalar = salaryCalculate(userNum);
console.log(tempSalar);

const tempRes = Math.round(tempSalar * 100) / 100;
console.log(tempRes);

if (isFinite(Number(userNum))) {
  console.log(`Размер заработной платы за вычетом налогов равен ${tempRes}.`);
} else {
  console.log(`Значение задано неверно --> ${userNum}`);
}
