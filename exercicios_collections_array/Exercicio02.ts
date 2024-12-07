/**
  2 - Escreva um programa para criar uma Collection Array do tipo number, inicializada com 
  10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 
  1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste 
  número na Collection. Caso o número não seja encontrado, o programa deverá exibir na 
  tela a mensagem: O número NN não foi encontrado!  
 */
import readlinesync = require("readline-sync")

const numerosInteiros: Array<number> = new Array<number>();

for (let contador = 0; contador < 10; contador ++) {
    numerosInteiros.push(readlinesync.questionInt())
 }

let numeroDigitado = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")

if(numerosInteiros.indexOf(numeroDigitado) >= 0) {
    console.log(`O numero ${numeroDigitado} esta localizado na posição: ${numerosInteiros.indexOf(numeroDigitado)}`)
} else {
    console.log(`O numero ${numeroDigitado} não foi encontrado!`)
}
