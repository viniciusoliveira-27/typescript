/**
 1 - Escreva um programa para criar uma Collection Array de Objetos do tipo string. O 
 programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá 
 adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente. 
 */
import readlinesync = require("readline-sync");

//Criamos a coleção Array vazia
const cores: Array<string> = new Array<string>();

for (let contador = 0; contador < 5; contador ++){
    cores.push(readlinesync.question("Digite uma cor: "))
}


console.log("\nListar todas cores: \n")
for (let listar of cores) {
    console.log(listar)
}

console.log("\nOrdenar as cores: \n")
for (let listar of cores.sort()) {
    console.log(listar)
}



