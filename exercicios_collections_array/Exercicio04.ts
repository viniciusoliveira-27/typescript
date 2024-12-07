/**
 04 - Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 
 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 
 número inteiro e caso ele seja encontrado na Colection Set, exiba na tela a mensagem: O 
 Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na 
 tela a mensagem: O número NN não foi encontrado!
 */
 import readlinesync = require("readline-sync")

 const numerosInteiros: Set<number> = new Set<number>();

 for (let contador = 0; contador < 10; contador ++) {
    numerosInteiros.add(readlinesync.questionInt())
 }
 
 let numeroDigitado = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")

 if(numerosInteiros.has(numeroDigitado)) {
    console.log(`O numero ${numeroDigitado} foi encontrado!`)
 } else {
    console.log(console.log(`O numero ${numeroDigitado} não foi encontrado!`))
 }