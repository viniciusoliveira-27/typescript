/**
6 - Leia três valores de ponto flutuante A, B e C, que representam os lados de um triângulo. Em 
seguida, determine o tipo de triângulo que esses três lados formam, com base nas condições 
abaixo, exibindo a mensagem correspondente:
Se A ≥ B + C, o programa deve exibir: NÃO FORMA TRIÂNGULO.
Se todos os lados forem iguais, o programa deve exibir: TRIÂNGULO EQUILÁTERO.
Se apenas dois lados forem iguais, o programa deve exibir: TRIÂNGULO ISÓSCELES.
Se todos os lados forem diferentes e formarem um triângulo, o programa deve exibir: TRIÂNGULO ESCALENO. 
 */
import readlinesync = require("readline-sync");

let ladoA : number
let ladoB : number
let ladoC : number

ladoA = readlinesync.questionFloat("Digite o tamanho do lado A: ")
ladoB = readlinesync.questionFloat("\nDigite o tamanho do lado B: ")
ladoC = readlinesync.questionFloat("\nDigite o tamanho do lado C: ")

if(ladoA === ladoB && ladoA === ladoC){
    console.log("\nTRIANGULO EQUILATERO")
} else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    console.log("\nTRIANGULO ISOSCELES")
} else if(ladoA >= (ladoB + ladoC) || ladoB >= (ladoA + ladoC) || ladoC >= (ladoB + ladoA)) {
    console.log("\nNÃO FORMA TRIANGULO")
} else {
    console.log("\nTRIANGULO ESCALENO")
}