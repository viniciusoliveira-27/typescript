import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();

//Colocando pessoas na Fila
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

fila.enqueue(readlinesync.question("Digite o seu nome: "));

//Imprimindo a Fila
fila.printQueue();

//Verificando se tem "Tal pessoa" na Fila
console.log(fila.contains("Alana"))

//Conta quantas pessoas tem na Fila
console.log(fila.count())

//chamando e apagando o primeiro da fila
console.log("\n Chamar: ", fila.dequeue())


fila.printQueue();

//O proximo a ser chamado
console.log(fila.peek())
