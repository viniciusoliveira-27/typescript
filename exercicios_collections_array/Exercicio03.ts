/**
 3 - Escreva um programa para criar uma Collection Set do tipo number. O programa deverá 
 solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e 
 adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
Veja o exemplo abaixo:
 */
import readlinesync = require("readline-sync");


const numerosInteiros: Set<number> = new Set<number>();

for(let contador = 0; contador < 10; contador ++){
    numerosInteiros.add(readlinesync.questionInt("Digite um numero: "));
}

let setOrdenado: Array<number> = Array.from(numerosInteiros).sort((a , b) => a - b);

console.log("\nListar dados do Set: ")
for (let listar of setOrdenado) {
    console.log(listar)
}