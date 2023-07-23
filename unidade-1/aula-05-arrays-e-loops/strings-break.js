// Introdução ao break e como percorrer uma string como se fosse um array.

const palavra = "Alemanha";

let encontrado = false;

for (let letra of palavra) {
    if (letra === "h") {
        console.log("Tem a letra H.");
        encontrado = true;
        break;
    }
}
if (encontrado === false) {
    console.log("Não tem a letra H.");
}