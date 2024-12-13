/**
5 - Elabore um algoritmo que leia 3 valores inteiros e ordene-os tanto em ordem crescente quanto em ordem decrescente. 
No final, o programa deve exibir os valores na seguinte sequência:
Na sequência original;
Em ordem crescente;
Em ordem decrescente.
Cada sequência deve ser exibida em uma linha separada, com uma linha em branco entre elas.
 */

import readlinesyinc = require("readline-sync")

let valor1 : number
let valor2 : number
let valor3 : number

valor1 = readlinesyinc.questionInt("Digite o primeiro numero inteiro: ")
valor2 = readlinesyinc.questionInt("Digite o segundo numero inteiro: ")
valor3 = readlinesyinc.questionInt("Digite o terceiro numero inteiro: ")

console.log(`\nsequencia original: ${valor1}, ${valor2} e ${valor3}`)

//ordem crescente e decrescente
if((valor1 < valor2 && valor1 < valor3) && (valor2 < valor3) ) {
    console.log(`\nOrdem crescente: ${valor1}, ${valor2} e ${valor3}`)
    console.log(`\nOrdem decrescente: ${valor3}, ${valor2} e ${valor1}`)

} else if ((valor1 < valor2 && valor1 < valor3) && (valor3 < valor2)) {
    console.log(`\nOrdem crescente: ${valor1}, ${valor3} e ${valor2}`)
    console.log(`\nOrdem decrescente: ${valor2}, ${valor3} e ${valor1}`)

} else if ((valor2 < valor1 && valor2 < valor3) && (valor3 < valor1)) {
    console.log(`\nOrdem crescente: ${valor2}, ${valor3} e ${valor1}`)
    console.log(`\nOrdem decrescente: ${valor1}, ${valor3} e ${valor2}`)

} else if ((valor2 < valor1 && valor2 < valor3) && (valor1 < valor3)) {
    console.log(`\nOrdem crescente: ${valor2}, ${valor1} e ${valor3}`)
    console.log(`\nOrdem decrescente: ${valor3}, ${valor1} e ${valor2}`)

} else if ((valor3 < valor1 && valor3 < valor2) && (valor1 < valor2)) {
    console.log(`\nOrdem crescente: ${valor3}, ${valor1} e ${valor2}`)
    console.log(`\nOrdem decrescente: ${valor2}, ${valor1} e ${valor3}`)

} else {
    console.log(`\nOrdem crescente: ${valor3}, ${valor2} e ${valor1}`)
    console.log(`\nOrdem decrescente: ${valor1}, ${valor2} e ${valor3}`)
}

//Ordem decrescente
