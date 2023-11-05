"use strict";

//
// const number = Number(prompt("vvod chisel: "));
// let i = 1;
// while (i <= number) {
//     console.log(i++);
//   //   console.log(++i);
// }

//
// let pass;
// let count = 0;
// do {
//   if (count >= 3) {
//     alert("parol ne tot");
//   }
//   pass = Number(prompt("Vvedite parol: "));
//   count++;
// } while (pass !== 123);

//
// for (let i = 0; i < 3; i++) {
//   console.log("hello");
// }

//
// const students = [];
// students.push("Иванов");
// students.push("Петров");
// students.push("Сидоров");
// console.log(students);

//
// const user = [];

// // const userName = prompt("vashe imi");
// // const userAge = prompt("vashe age");

// // user.push(userName);
// // user.push(userAge);

// // OR

// user.push(prompt("vashe imi"));
// user.push(Number(prompt("vashe age")));

// console.log(user);

//
// const students = ["Иванов", " Петров", " Сидоров"];
// console.log(students);

// const lastStudent = students.pop();

// console.log(lastStudent);
// console.log(students);

// const numbers = [2, 3, 19, 15];

// alert(`zadomni chisla ${numbers}`);

// // console.log(numbers[numbers.length - 1]); // 15
// console.log(numbers.pop());
// console.log(numbers);

//
// const word = "example";
// // console.log(word.split(",")); // ['example']
// // console.log(word.split("")); // ['e', 'x', 'a', 'm', 'p', 'l', 'e']

// const arrWrod = word.split("");
// const upCharWord = arrWrod.pop();
// // console.log(upCharWord.toUpperCase());

// arrWrod.push(upCharWord.toUpperCase());
// console.log(arrWrod.join(""));

// console.log(arrWrod.shift()); // shift удаляет первый элемент
// console.log(arrWrod.join(""));

//
// const students = ["Иванов", " Петров", " Сидоров"];
// const students2 = students;
// console.log(`students ${students}`);
// console.log(`students2 ${students2}`);

// students2.push("Белкин");

// console.log(`students ${students}`);
// console.log(`students2 ${students2}`);

// const students = ["Иванов", " Петров", " Сидоров"];
// const students2 = students.slice();

// console.log(`students ${students}`);
// console.log(`students2 ${students2}`);

// students2.push("Белкин");

// console.log(`students ${students}`);
// console.log(`students2 ${students2}`);

//
// const students = [
//   "Иванов",
//   "Петров",
//   "Сидоров",
//   "Белкин",
//   "Авдеев",
//   "Александров",
// ];
// if (students.indexOf("Иванов")) {
//   // 0 приводится к false 1 к true
//   console.log("yes, ivanov good!");
// }
// console.log(students.indexOf("Иван")); //    -1 элемента нет ===> -1
// console.log(students.indexOf("Иванов")); //  элемент есть   ===> индекс элемента

// if (students.indexOf("Иванов") !== -1) {
//   console.log("Среди студентов етсь Иванов");
// }

// const indexOfBelkin = students.indexOf("Белкин"); // 3
// console.log(indexOfBelkin);

//
// const a = 4;
// const students3 = [1, 2, 3];
// console.log(students3);

// students3.push(a);

// console.log(students3);

//
// const b = 0;
// const arrNum = [1, 2, 3];
// console.log(arrNum);

// arrNum.shift(b);

// console.log(arrNum);

//
// const products = ["kofta", "kyrtka", "fytbolka", "broki"];

// for (let i = 0; i < products.length; i += 2) {
//   console.log(products[i]);
// }

//
// const arr = [1, 2, 3, 7, 19];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element >= 5) {
//     console.log(element);
//   } else {
//     continue;
//   }
// }

// console.log(arr.indexOf("3")); // -1
// console.log(arr.indexOf(3)); // 2

//
// const arrAnswers = ["елка", "ёлка", "ель"];
// const userAnswer = prompt("Зимой и летмо одним цетом");

// for (let i = 0; i < arrAnswers.length; i++) {
//   const element = arrAnswers[i];
//   if (element === userAnswer) {
//     console.log("good answer!");
//     break;
//   } else {
//     if (i === arrAnswers.length - 1) {
//       console.log("bad answer!");
//     }
//     continue;
//   }
// }
