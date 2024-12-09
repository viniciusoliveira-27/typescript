import { Stack } from "./Stack";


const pilha = new Stack<string>();

//Adicionar coisas a pilha
pilha.push("Prato azul");
pilha.push("Prato Amarelo");
pilha.push("Prato vermelho");

//Imprimindo a Pilha
pilha.printStack();

//Verificando se tem "Tal coisa" na Pilha 
console.log(pilha.contains("\nPrato branco"));

//Retira o primeiro objeto da pilha
pilha.pop();

pilha.printStack();