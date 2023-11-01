"use strict";

/*
const f = (param = 5) => {
  console.log(param);
};

f();
f(10);
f("flslflsf");
 */

/*
const sum1 = function (a, b) {
  return a + b;
};

const f = (a, b) => a + b;

console.log(sum1(2, 3));
console.log(f(8, -3));
*/

/*
function helloName(name) {
  console.log(`Привет, ${name}`);
}

helloName("Aleks");
helloName(); // undefiend

let count = 5;

function counter() {
  return count++;
}

counter();
counter();

console.log(count);
*/

/*
let age = Number(prompt("Сколько вам лет"));

// function upAge() {
//   return age + 5;
// }

const lvlUpAge = () => age + 5;

console.log(lvlUpAge());
console.log(age);
*/

// function helloWorld() {
//   console.log("Hello world");
// }

// helloWorld();

// const sum = (param1, param2) => {
//   return param1 + param2;
// };

// const res = sum(2, 5);
// console.log(res);

/*
const salaryNalogOtpysk = (money) => {
  return (money = money * 0.87 * 0.75);
};
const salaryNalog = (money) => {
  return (money = money * 0.87);
};

const userMoney = Number(prompt("Сколько твоя ЗП: "));

console.log(salaryNalogOtpysk(userMoney));
console.log(salaryNalog(userMoney));
*/

// function buy() {
//   alert("Подзравляем!");
//   alert("Вы нажали на кнопку купить");
// }

// let userAnswer = prompt("Зимой и летмо одинм цветом");

// if (userAnswer === "елка") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }

// let userAnswer2 = prompt(
//   "Сидит дет в 100 шщуб одет, кто едго раздевает, слёзы проилвает"
// );

// if (userAnswer2 === "лук") {
//   console.log("Угадал");
// } else {
//   console.log("Не угадал");
// }

function askQuestion(answer, question) {
  const userAnswer2 = prompt(question);

  if (userAnswer2.toLocaleLowerCase() === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}

function puzzle() {
  askQuestion(
    "лук",
    "Сидит дет в 100 шщуб одет, кто едго раздевает, слёзы проилвает"
  );
  askQuestion("елка", "Зимой и летмо одинм цветом");
}
