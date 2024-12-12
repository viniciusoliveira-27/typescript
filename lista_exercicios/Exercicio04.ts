/**
4 - Elabore um algoritmo que leia via teclado um número inteiro que representa um valor em 
Reais (R$). Na sequência exiba o menor número de notas (Cédulas de dinheiro), do qual este 
valor pode ser decomposto. Para o exercício, considere as notas de R$ 200.00, R$ 100.00, 
R$ 50.00, R$ 20.00, R$ 10.00, R$ 5.00, R$ 2.00 e R$ 1.00. Veja os exemplos abaixo:
 */
import readlinesync = require("readline-sync");

let valorReais: number
valorReais = readlinesync.questionFloat("Digite um valor em Reais (sem os centavos)\n")

console.log(`Para o valor R$ ${valorReais},00 utilizaremos: \n`)
decomporValorNotas(valorReais)




function decomporValorNotas(valorReais: number): void {
    let nota200 = Math.floor(valorReais / 200)
    valorReais = valorReais % 200
    console.log(`${nota200} nota(s) de R$ 200,00`)

    let nota100 = Math.floor(valorReais / 100)
    valorReais = valorReais % 100
    console.log(`${nota100} nota(s) de R$ 100,00`)

    let nota50 = Math.floor(valorReais / 50)
    valorReais = valorReais % 50
    console.log(`${nota50} nota(s) de R$ 50,00`)

    let nota20 = Math.floor(valorReais / 20)
    valorReais = valorReais % 20
    console.log(`${nota20} nota(s) de R$ 20,00`)

    let nota10 = Math.floor(valorReais / 10)
    valorReais = valorReais % 10
    console.log(`${nota10} nota(s) de R$ 10,00`)

    let nota5 = Math.floor(valorReais / 5)
    valorReais = valorReais % 5
    console.log(`${nota5} nota(s) de R$ 5,00`)

    let nota2 = Math.floor(valorReais / 2)
    valorReais = valorReais % 2
    console.log(`${nota2} nota(s) de R$ 2,00`)

    let nota1 = Math.floor(valorReais / 1)
    console.log(`${nota1} nota(s) de R$ 1,00`)
    
}

