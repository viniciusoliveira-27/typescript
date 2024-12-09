/**
  1 - Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
  para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá 
  ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila. 
 */
import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();
let opcao : number;

do {
    console.log("******************************")

    console.log("\n1 - Adicionar Clientes na Fila")
    console.log("2 - Listar todos os Clientes")
    console.log("3 - Retirar Clientes da Fila")
    console.log("0 - Sair\n")

    console.log("******************************\n")
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ")

    switch (opcao) {
        case 1:
            fila.enqueue(readlinesync.question("Adicione o nome do Cliente: "));
            console.log("\nFila: \n");
            fila.printQueue();
            console.log("\nCliente Adicionado! \n");
            break;
        case 2:
            console.log("\nLista de Clientes na Fila: \n");
            fila.printQueue(); 
            break;
        case 3: 
            if(fila.count() === 0) {
                console.log("\nA Fila esta vazia!\n")
            } else {
            console.log(`O ${fila.dequeue()} foi atendido! `)
            console.log("\nFila: \n")
            fila.printQueue()
            }
            break;
        case 0:
            break;
        default :
            console.log("\nOpção inválida!\n");
    }

} while(opcao != 0)
console.log("\nPrograma Finalizado!")