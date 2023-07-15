"use strict";
// Hoe kan ik de nummer voor de operatie opslaan? Dit kan ik.
//

let num1 = "";
let operatieVar = "";
let num2 = "";
let resultaat = "";

// ^ toetsen
const nummers = document.querySelectorAll("[data-nummer]");
const decimale = document.querySelector("#decimale");
const operaties = document.querySelectorAll("[data-operatie]");
const gelijk = document.querySelector("[data-gelijk]");
const wisAlles = document.querySelector("[data-wisAlles]");

const scherm = document.querySelector(".scherm");

const opslaan1 = document.querySelector("#nummer-1-opslaan");
const opslaanOperatie = document.querySelector("#operatie-opslaan");
const opslaan2 = document.querySelector("#nummer-2-opslaan");
const resultaatToen = document.querySelector("#resultaat-toen");
const resultaatWijzigen = document.querySelector("#resultaat-wijziging");

// ^ variabels voor nummer 1, operatie, nummer 2

const invoer = function (invoer, nummer) {
  scherm.innerText += invoer;
  nummer += invoer;
};
// ^ Alle operaties
const plus = function (num1, num2) {
  return num1 + num2;
};
const min = function (num1, num2) {
  return num1 - num2;
};
const keer = function (num1, num2) {
  return num1 * num2;
};
const delen = function (num1, num2) {
  return num1 / num2;
};

const opereren = function (num1, operatie, num2) {
  if (operatie === "+") resultaat = plus(num1, num2);
  if (operatie === "-") resultaat = min(num1, num2);
  if (operatie === "*") resultaat = keer(num1, num2);
  if (operatie === "/") resultaat = delen(num1, num2);
};

// / ------------------------------------------------------

const toevoegNummer = function (num) {
  if (scherm.innerText.includes(".") && num === ".") {
    return;
  }
  if (!operatieVar) {
    scherm.innerText += num;
    num1 += num;
  } else {
    if (!num2) {
      scherm.innerText = "";
    }
    scherm.innerText += num;
    num2 += num;
  }
};

const toevoegOperatie = function (operatie) {
  if (!num2) {
    num1 = parseFloat(scherm.innerText);
    operatieVar = operatie;
  }
  if (num1 && num2) {
    num2 = parseFloat(scherm.innerText);
    opereren(num1, operatieVar, num2);
    resultaat = parseFloat(resultaat.toFixed(10));
    num1 = resultaat;
    num2 = "";
    operatieVar = operatie;
    scherm.innerText = resultaat;
  }
};

// ^ Toetsenbord functies
nummers.forEach((nummer) => {
  nummer.addEventListener("click", () => toevoegNummer(nummer.innerText));
});

operaties.forEach((operatie) => {
  operatie.addEventListener("click", () => toevoegOperatie(operatie.innerText));
});

gelijk.addEventListener("click", function () {
  num2 = parseFloat(scherm.innerText);
  opereren(num1, operatieVar, num2);
  resultaat = parseFloat(resultaat.toFixed(10));
  scherm.innerText = resultaat;
  num1 = resultaat;
  num2 = "";
});

wisAlles.addEventListener("click", function () {
  num1 = operatieVar = num2 = resultaat = "";
  scherm.innerText = "";
});

// Geen decimale
// Alle code hoef herschikken in functies

// ^ ------------------------hulp-functies---------------------------------------

document.addEventListener("keydown", function () {
  console.log(num1, operatieVar, num2, resultaat);
});

// opslaan1.addEventListener("click", function () {
//   num1 = parseFloat(scherm.innerText);
//   scherm.innerText = "";
//   console.log(num1);
// });

// opslaanOperatie.addEventListener("click", function () {
//   if (!num2) {
//     operatieVar = scherm.innerText;
//     scherm.innerText = "";
//     console.log(operatieVar);
//   }
//   if (num1 && num2) {
//     opereren(num1, operatieVar, num2);
//     operatieVar = scherm.innerText;
//     scherm.innerText = "";
//     console.log(operatieVar);
//     num1 = resultaat;
//     num2 = resultaat = null;
//   }
// });

// opslaan2.addEventListener("click", function () {
//   num2 = parseFloat(scherm.innerText);
//   scherm.innerText = "";
//   console.log(num2);
// });

// resultaatToen.addEventListener("click", function () {
//   console.log(resultaat);
// });

// resultaatWijzigen.addEventListener("click", function () {
//   num1 = resultaat;
//   num2 = operatieVar = resultaat = null;
// });

// document.addEventListener("keydown", function () {
//   console.log(num1, operatieVar, num2, "=", resultaat);
// });
