let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros ){
    console.log(numero)
}
console.log("\n")
//Arrow functionn

numeros.forEach(numero => console.log(numero))

console.log("\n")

//numeros elevado ao quadrado
numeros.forEach(numero => console.log(numero * numero))

console.log("\n")

//Listar numeros pares
numeros.forEach(numero =>{
    if(numero % 2 === 0)
        console.log(numero)
})
