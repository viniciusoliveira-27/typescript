/**
 1 - Elabore um algoritmo para calcular a área de um círculo. O algoritmo deverá solicitar 
 ao usuário, via teclado, a entrada de um número do tipo float, que representará o raio do 
 círculo. Em seguida, o programa calculará e exibirá a área do círculo. Veja os exemplos 
 abaixo:
 */

import readlinesync = require("readline-sync");

let numero = readlinesync.questionFloat("Digite o raio do criculo: ")

let pi = 3.1415

let areaCirculo = pi * Math.pow(numero, 2)

console.log("Area do circulo = ",areaCirculo.toFixed(2))