
const frutas: Set<string> = new Set<string>();


frutas.add("Banana");
frutas.add("Maça");
frutas.add("Pera");
frutas.add("Melancia");
frutas.add("Abacaxi");
frutas.add("Banana");

console.table(frutas);

console.log("A fruta Morango existe? ", frutas.has("Morango"))

frutas.delete("Abacaxi");

console.table(frutas)

let setOrdenado: Array<string> = Array.from(frutas).sort();

console.table(setOrdenado);