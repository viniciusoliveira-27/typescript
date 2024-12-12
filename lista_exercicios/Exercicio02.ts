/**
2 - Elabore um algoritmo para calcular e exibir a quantidade de litros de combustível 
consumidos durante uma viagem com um automóvel que possui rendimento de 12 km/L. O cálculo 
do consumo de combustível deve ser feito com base em dois parâmetros que serão lidos via teclado:
Tempo gasto na viagem (em horas);
Velocidade média durante a viagem (em km/h).
Com essas informações, é possível calcular a distância percorrida e, em seguida, 
determinar a quantidade de combustível necessária. O resultado deve ser apresentado com 
duas casas decimais após o ponto. Veja os exemplos abaixo:
 */
import readlinesync = require("readline-sync");

let tempo: number, velocidadeMedia: number , distancia : number
let consumoCombustivel = 0, rendimento = 12

tempo = readlinesync.questionFloat("Digite o tempo gasto na viagem (em horas): ")
velocidadeMedia = readlinesync.questionFloat("\nDigite a velocidade media (em KM por horas): ")

distancia = tempo * velocidadeMedia
consumoCombustivel = distancia/rendimento

console.log("\nTotal de combustivel gasto (em litros): ", consumoCombustivel.toFixed(2));
