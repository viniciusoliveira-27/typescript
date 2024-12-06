import readlinesync = require("readline-sync");

//Criamos a coleção Array vazia
const numeros: Array<number> = new Array<number>();

//Adicionamos os valores na Coleção
numeros.push(7);
numeros.push(9);
numeros.push(4);
numeros.push(10);
numeros.push(5);
numeros.push(7);

// Listamos os dados que foram adicionados
for(let numero of numeros) {
    console.log(numero)
}
// Adicionamos um numero utilizando a entrada de dados via teclado
numeros.push(readlinesync.questionFloat("Digite um numero: "))

// Adiciona um ou mais elementos no inicio da flia do Array
numeros.unshift(2, 4.5, 8, 9)

console.table(numeros)

//Verifica se o numero existe na coleção
console.log("\nExiste o numero 10 no array? ", numeros.includes(10))

//Verifica qual é o indicce do elemwnto
console.log("\nQual o indice do numero 10 no array? ", numeros.indexOf(10))

//Removemos um numero da Coleção
numeros.splice(numeros.indexOf(10), 1)


console.table(numeros)