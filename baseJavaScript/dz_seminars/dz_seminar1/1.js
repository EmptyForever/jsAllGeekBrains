"use strict";

let gradusCels = prompt("Введите градусы цельсия: ");
function celcInFarengent(gradCels) {
    let gradFareng;
    gradFareng = (9 / 5) * gradCels + 32;
    return gradFareng;
}
let gradusFarengeit = celcInFarengent(gradusCels);

alert(`Цельсий: ${gradusCels}, Фаренгейт: ${gradusFarengeit}`);