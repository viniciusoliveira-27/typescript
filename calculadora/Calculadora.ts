import readlinesync = require("readline-sync");

let numero01: number;
let numero02: number;

numero01 = readlinesync.questionFloat("Digite o primeiro numero: ")
numero02 = readlinesync.questionFloat("Digite o segundo numero: ")

console.log("A Soma dos 2 numeros e igual a: ", numero01 + numero02)
console.log("A Subtração dos 2 numeros e igual a: ", numero01 - numero02)
console.log("A Multiplicação dos 2 numeros e igual a: ", numero01 * numero02)
console.log("A Divisão dos 2 numeros e igual a: ", numero01 / numero02)
