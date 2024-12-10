import readlinesync = require("readline-sync");
import {colors} from "./../util/Cores"

let numero01: number;
let numero02: number;
let opcao: number;

do {

    menu();
    opcao = readlinesync.questionInt("Digite a opcao desejada: ")



    if (opcao === 0) {
        about();
        process.exit(0)
    }

    switch (opcao) {
        case 1:
            [numero01, numero02] = obterNumeros();
            console.log(`\n${numero01} + ${numero02} = ${somar(numero01, numero02)}\n`)
            break;
        case 2:
            [numero01, numero02] = obterNumeros();
            console.log(`\n${numero01} - ${numero02} = ${subtrair(numero01, numero02)}\n`)
            break;
        case 3:
            [numero01, numero02] = obterNumeros();
            console.log(`\n${numero01} * ${numero02} = ${multiplicar(numero01, numero02)}\n`)
            break;
        case 4:
            [numero01, numero02] = obterNumeros();

            let resultado = dividir(numero01, numero02)

            if (resultado !== null)
                console.log(`\n${numero01} / ${numero02} = ${dividir(numero01, numero02)}\n`)
            else
                console.log("Não existe divisao por zero!")
            break;
        default:
            console.log("Opcao invalida!")


    }

} while (true)

function menu(): void {
    console.log(colors.bg.whitebright, colors.fg.blackstrong)
    console.log("**************************************************")
    console.log("\n                   Calculadora                    \n")
    console.log("**************************************************")
    console.log("               1 - Somar                           ")
    console.log("               2 - Subtrair                        ")
    console.log("               3 - Multiplicar                     ")
    console.log("               4 - Dividir                         ")
    console.log("               0 - Sair                            ")
    console.log("\n**************************************************\n", colors.reset)
}

function obterNumeros(): [number, number] {
    const numero01 = readlinesync.questionFloat("Digite o primeiro numero: ")
    const numero02 = readlinesync.questionFloat("Digite o segundo numero: ")
    return [numero01, numero02]
}

function somar(numero01: number, numero02: number): number {
    return numero01 + numero02
}
function subtrair(numero01: number, numero02: number): number {
    return numero01 - numero02
}
function multiplicar(numero01: number, numero02: number): number {
    return numero01 * numero02
}
function dividir(numero01: number, numero02: number): number | null {
    let divisao = numero01 / numero02
    return (divisao !== Infinity ? divisao : null)
}

function about() {
    console.log("\nCriado por Vinicius\n")
}