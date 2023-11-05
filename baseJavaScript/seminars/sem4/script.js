"use strict";

// Задание 1 (тайминг 20 минут) Текст задания 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. 2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве. 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// 1
const arr = [1, 2, 3];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// 2
// console.log(arr.length);

// 3
const newArrChar = ["a", "b", "c"];
// console.log(newArrChar);

// newArrChar[0] = 1;
// newArrChar[1] = 2;
// newArrChar[2] = 3;

for (let i = 0; i < newArrChar.length; i++) {
  newArrChar[i] = i + 1;
}

// console.log(newArrChar);

// Задание 2 (тайминг 15 минут) 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу. 2. Узнайте длину следующего массива: const arr = []; arr[3] = 'a'; arr[8] = 'b'; 1. Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5. 1. Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// 1
// const arrNewTemp = [];
// console.log(arrNewTemp);
// for (let i = 0; i < 3; i++) {
//   arrNewTemp[i] = i + 1;
//   // const element = array[i];
// }
// console.log(arrNewTemp);

// for (let i = 0; i < arrNewTemp.length; i++) {
//   arrNewTemp[i] = arrNewTemp[i] + 1;
// }
// console.log(arrNewTemp);
// arrNewTemp[0]++; // arrNewTemp[0] = arrNewTemp[0] + 1
// arrNewTemp[0]--;
// console.log(arrNewTemp);
// for (let i = 0; i < arrNewTemp.length; i++) {
//   arrNewTemp[i]++;
// }
// console.log(arrNewTemp);

// 2
// const arrTemp21 = [];
// arrTemp21[3] = "a";
// arrTemp21[8] = "b";

// console.log(arrTemp21);
// console.log(arrTemp21.length);

// 3
// Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5. 1. Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// const arr11 = [1, 2, 3];
// console.log(arr11);
// arr11.push(4, 5);
// console.log(arr11);
// arr11.unshift(4, 5);
// console.log(arr11);

// const firstEl = arr11.shift();
// console.log(firstEl);
// console.log(arr11);

// const lastEl = arr11.pop(0);

// console.log(lastEl);
// console.log(arr11);

// const arr2222 = arr11.splice(2, 2);

// console.log(lastEl);
// console.log(arr11);
// console.log(arr2222);

// arr11.splice(2, 1, 100, 200, 300);
// console.log(arr11);

//
// const arrTemppik = ["a", "b", "c", "d", "e"];
// console.log(arrTemppik.length);
// console.log(arrTemppik);

// arrTemppik.splice(0, 2);
// console.log(arrTemppik.length);
// console.log(arrTemppik);

// delete arrTemppik[0];
// console.log(arrTemppik.length);
// console.log(arrTemppik);

// 3 pflfybt
//
//

// 1
// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

//
// let i = 3;
// const result1 = i++;

// console.log(i);
// console.log(result1);
// console.log(result1);

// let i2 = 3;
// const result12 = ++i2;

// console.log(i2);
// console.log(result12);
// console.log(result12);

// 2
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let i = 1; i < 101; i += 2) {
//   console.log(i);
// }

// 3
// for (let i = 100; i > 0 - 1; i--) {
//   console.log(i);
// }

// 4
// let counter = 0;
// let userNum = 2;
// console.log(userNum);
// while (userNum < 1000) {
//   userNum *= 3;
//   counter++;
//   console.log(userNum);
// }
// console.log('Число');
// console.log(userNum);
// console.log('количество итераций');
// console.log(counter);

// 4.1
// let counet41 = 0;
// let numchik;
// for (let i = 2; i < 1000; i = i * 3) {
//   numchik = i;
//   console.log(i);
//   counet41++;
// }
// console.log(numchik * 3);
// console.log(counet41);

// задание 4
// Задание 4 (тайминг 25 минут) 1. Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// 1. Найдите сумму четных чисел от 2 до 100. 2. Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.

// 1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// 2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

// 4.1
// const arr411 = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr411.length; i++) {
//   if (arr411[i] > 3 && arr411[i] < 10)
//   console.log(arr411[i]);
// }

// 4.2
// let summ = 0;
// for (let i = 2; i < 101; i += 2) {
//   summ += i;
//   console.log(summ);
// }
// console.log(summ);

// 4.3
let summ43 = 0;
const arrnewTemppppik = [2, 5, 9, 3, 1, 4];
// for (let i = 0; i < arrnewTemppppik.length; i++) {
//   summ43 += arrnewTemppppik[i];
// }
// console.log(summ43);
//
// for (const tempNum of arrnewTemppppik) {
//   summ43 += tempNum;
// }
// console.log(summ43);

// 4.1.1
// '-1-2-3-4-5-6-7-8-9-'
// let str1 = "-";

// for (let i = 1; i < 9 + 1; i++) {
//   // str1 += `${i}-`;
//   // str1 = str1 + `${i}` + "-";
//   str1 = str1 + i + "-";
// }
// console.log(str1);

// 4.5
// Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

const arrChikiPuki = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < arrChikiPuki.length; i++) {
//   if (arrChikiPuki[i] === 0) {
//     console.log(`А вот и нолик. Его индекс ${i}`);
//     break;
//   }
//   console.log(arrChikiPuki[i]);
// }

// for (const i of arrChikiPuki) {
//   if (i === 0) {
//     console.log(`А вот и нолик!`);
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < arrChikiPuki.length && arrChikiPuki[i] !== 0; i++) {
//   console.log(arrChikiPuki[i]);
// }

//
// 5 Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// const rndArray = [];
// let rndNext = 0;

// for (let i = 0; i < 10; i++) {
//   rndNext = Math.random() * 10 - 5;
//   console.log(rndNext);
//   console.log(Math.round(rndNext));
//   // rndArray[i] = Math.trunc(Math.random() * 10);
//   rndArray.push(Math.round(rndNext));
// }

// console.log(rndArray);

// for (const i of rndArray) {
//   if (i % 2 === 0) {
//     console.log(i ** 2);
//   }
//   if (i % 3 === 0) {
//     console.log(i ** 3);
//   }
// }

// 5.2
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
//
// const arr52 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

// let counter52 = 0;
// for (const item of arr52) {
//   if (item === 3) {
//     counter52++;
//   }
// }

// console.log(counter52);

// 5.3
// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// const arr53 = [1, 2, 3, 4, 1, 2, 3, 4, 5];
// console.log(arr53);

// const newArr53 = arr53.splice(5, 2);

// console.log(arr53);
// console.log(newArr53);

// 5.4
// С помощью двух вложенных циклов выведите на экран следующую строку:
//
// let str54 = "";
// for (let i = 1; i < 5 + 1; i++) {
//   str54 = "";
//   for (let j = 1; j < 5 + 1; j++) {
//     str54 += `${i * j} `;
//   }
//   console.log(str54);
//   console.log(1);
// }

// 5.2.2
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
// 
// const arr52 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

// console.log(
//   arr52.reduce((acc, value) => {
//     if (value === 3) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0)
// );
