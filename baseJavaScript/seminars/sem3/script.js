"use strict";

function userInfo(firstName, secondName, userAge) {
  console.log(
    `Привет, ${firstName} ${secondName}. Вы уже большой, вам ${userAge}.`
  );
}

// 2.
// function quadreNumber(numUser) {
//   return numUser * numUser;
// }
const numSquare = function (num) {
  // return Math.pow(num, 2);
  return num ** 2;
};

// 3.
function positiveOrNegative(numUser) {
  console.log(typeof numUser);
  if (typeof numUser == "number") {
    if (numUser > 0) {
      console.log("+++");
    } else if (numUser < 0) {
      console.log("---");
    }
  }
}

// userInfo("Aleks", "Kalinkin", 19);
// console.log(numSquare(0.1));
// 3.positiveOrNegative(true);

// 1. Сделайте функцию, которая параметрами принимает
//  Три числа и выводит в консоль сумму этих чисел.

const triapleSum = (num1, num2, num3) => {
  console.log(num1 + num2 + num3);
};

// triapleSum(1, 2, 3);

// 2.выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
// triapleSum(param1, param2, param3);

const num1Temp = Math.trunc(Math.random() * 10);
const num2Temp = Math.trunc(Math.random() * 10);
const num3Temp = Math.trunc(Math.random() * 10);
// console.log(num1Temp);

const triapleSum2 = (n1, n2, n3) => n1 + n2 + n3;
// console.log(triapleSum2(2, 3, 4));

// работает с конкретными переменными из кода(внешние значения)
const triapleSum3 = () => num1Temp + num2Temp + num3Temp;
// console.log(triapleSum3(0, 2, 4));

// задание 3
// 3.1
function sqrt(userNum) {
  // return Math.sqrt(userNum);
  return userNum ** 0.5;
}
// console.log(sqrt(4) + sqrt(3));
// 3.2
function searchMin(num1, num2) {
  let min;
  if (num1 > num2) {
    min = num2;
  } else {
    min = min1;
  }
  console.log(min);
}

function searchMin2(num1, num2) {
  let min;
  if (num1 > num2) {
    min = num2;
  } else {
    min = min1;
  }
  return min;
}

function findMin(num1, num2) {
  if (num1 > num2) {
    console.log(num2);
  } else {
    console.log(num1);
  }
}

function findMin2(num1, num2) {
  // if (num1 > num2) {
  //   return num2;
  // }
  // return num1;
  return num1 > num2 ? num2 : num1;
}

// console.log(findMin2(5, 2));

function anotherMin(num1, num2, num3) {
  return Math.min(num1, num2, num3);
}
// console.log(anotherMin(9, 6, 3));

function dayWeek(userNum) {
  switch (userNum) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";

    default:
      return "Ошибка";
  }
}

// console.log(dayWeek(3));
// console.log(dayWeek('3'));

function getHelloDayTime(userName) {
  const hour = new Date().getHours();
  console.log(hour);
  // if (hour > 4 && hour <= 10) {
  //   return `Добрый утро, ${userName}`;
  // } else if (hour > 10 && hour <= 17) {
  //   return `Добрый день, ${userName}`;
  // } else if (hour > 17 && hour < 23) {
  //   return `Добрый вечер, ${userName}`;
  // } else if (hour > 23 || (hour >= 0 && hour <= 4)) {
  //   return `Доброй ночи, ${userName}`;
  // }

  if (hour < 6) {
    return `Доброй ночи, ${userName}`;
  }
  if (hour < 12) {
    return `Доброе утро, ${userName}`;
  }
  if (hour < 18) {
    return `Добрый день, ${userName}`;
  }
  return `Добрый вечер, ${userName}`;
}

// console.log(getHelloDayTime("Aleks"));

// let product = prompt().toLowerCase();
// switch (product) {
//   case "мандарины":
//   case "бананы":
//   case "груши":
//     alert("одно и тоже");
// }

const num = 57;
// console.log((57 * 100) / 20);

/**
 * Функция бла бла бла. Возводит число в квадрат
 * @param {number} num
 * @returns {number}
 */

function anyFunc(num) {
  // console.log((num ** 2));
  return num ** 2;
}
// console.log(anyFunc('fsf'));

function stepen(num, pow) {
  if (pow === 0) {
    return 1;
  }
  return num * stepen(num, pow - 1);
}
// console.log(stepen(4, 3));

// 1. ПОлучаем отстаток от деления на 10
// 2. это число сравниваем с пятёркой
//    если больше 5, то надо сравнить с 7
//          если больше 7, значит округляем к десятке в большую сторону
//          иначе (<= 7) округляем к пятёрке
//    если меньше 5, то надо сравнить с 2
//          если больше 2, значит округляем к пятёрке
//          иначе (<= 2) округляем к десятке в меньшую сторону

function round5(val) {
  console.log("\n");
  const remainder = val % 10;
  console.log(remainder);
  if (remainder > 5) {
    if (remainder > 7) {
      return 10;
    }
    return 5;
  }
  if (remainder === 5) {
    return 10;
  }
  if (remainder > 2) {
    return 5;
  }
  return 0;
}

function round52(val) {
  let numTemp;
  console.log("\n");
  const remainder = val % 10;
  console.log(`Число до    ${val}, остаток ${remainder}`);
  if (remainder > 5) {
    if (remainder > 7) {
      numTemp = 10;
    } else {
      numTemp = 5;
    }
  } else if (remainder === 5) {
    numTemp = 10;
  } else {
    if (remainder > 2) {
      numTemp = 5;
    } else {
      numTemp = 0;
    }
  }
  return numTemp + Math.trunc(val / 10) * 10;
}

function round53(val) {
  let remain = val % 5;
  console.log(`Число до    ${val}, остаток ${remain}`);
  if (val >= 0) {
    if (remain > 2) {
      return val + (5 - remain);
    }
    return val - remain;
  }
  if (val < 0) {
    if (remain < -2) {
      return val - (5 + remain);
    }
    return val - remain;
  }
}
// 10 : val / 10) trunc) * 10 + ret

// console.log(`Число после ${round53(0)}`);
// console.log(`Число после ${round53(2)}`);
// console.log(`Число после ${round53(3)}`);
// console.log(`Число после ${round53(7)}`);
// console.log(`Число после ${round53(8)}`);
// console.log(`Число после ${round53(10)}`);
// console.log(`Число после ${round53(11)}`);
// console.log(`Число после ${round53(14)}`);
// console.log(`Число после ${round53(-2)}`);
// console.log(`Число после ${round53(-3)}`);
// console.log(`Число после ${round53(-7)}`);
// console.log(`Число после ${round53(-8)}`);
// console.log(`Число после ${round53(-10)}`);
// console.log(`Число после ${round53(-11)}`);
// console.log(`Число после ${round53(-14)}`);

let curentNum = 3;
function fizzBuzz(curentNum) {
  let tempPrint;
  if (curentNum % 3 === 0) {
    if (curentNum % 5 === 0) {
      // console.log("FizzBuzz");
      tempPrint = "FizzBuzz";
    } else {
      // console.log("Fizz");
      tempPrint = "Fizz";
    }
  } else if (curentNum % 5 === 0) {
    // console.log("Buzz");
    tempPrint = "Buzz";
  } else {
    // console.log(curentNum);
    tempPrint = curentNum;
  }
  console.log(tempPrint);
  
  curentNum += 1;
  if (curentNum < 100) {
    fizzBuzz(curentNum);
  }
}

fizzBuzz(curentNum);
