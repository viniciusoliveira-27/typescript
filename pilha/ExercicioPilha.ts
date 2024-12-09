/**
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a 
retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazi/;a, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia. 
 */

import readlinesync = require("readline-sync");
import { Stack } from "./Stack";


const pilha = new Stack<string>();
let opcao : number;

do {
    console.log("******************************")

    console.log("\n1 - Adicionar Livro a pilha")
    console.log("2 - Listar todos os Livros")
    console.log("3 - Retirar Livro da pilha")
    console.log("0 - Sair\n")

    console.log("******************************\n")
    opcao = readlinesync.questionInt("Entre com a opcao desejada: ")

    switch (opcao) {
        case 1:
            pilha.push(readlinesync.question("Adicione o nome do Livro: "));
            console.log("\nPilha: \n");
            pilha.printStack();
            console.log("\nLivro Adicionado! \n");
            break;
        case 2:
            console.log("\nLista de Livros na Pilha: \n");
            pilha.printStack(); 
            break;
        case 3: 
            if(pilha.isEmpty()) {
                console.log("\nA Pilha de Livros esta vazia!\n")
            } else {
            console.log(`O ${pilha.pop()} foi retirado da pilha! `)
            console.log("\nPilha: \n")
            pilha.printStack()
            }
            break;
        case 0:
            break;
        default :
            console.log("\nOpção inválida!\n");
    }

} while(opcao != 0)
console.log("\nPrograma Finalizado!")