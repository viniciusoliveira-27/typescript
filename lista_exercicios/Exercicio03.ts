/**
3 - Elabore um algoritmo que leia via teclado um número inteiro que representa um 
intervalo de tempo em segundos. Na sequência exiba este tempo na tela expresso em 
horas:minutos:segundos. Veja os exemplos abaixo: 
 */
import readlinesync = require("readline-sync");

let tempoSegundos: number
tempoSegundos = readlinesync.questionFloat("Digite o tempo em segundos: ")

let calcHoras = Math.floor(tempoSegundos / 3600 )
let calcMinutos = Math.floor((tempoSegundos % 3600) / 60)
let calcSegundos = Math.floor(tempoSegundos % 60)

console.log(`Tempo expresso em (hh:mm:ss): ${calcHoras}:${calcMinutos}:${calcSegundos}`)