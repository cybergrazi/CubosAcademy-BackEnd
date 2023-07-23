// Faça um programa que conta quantas letras "a" existem numa determinada palavra
// e imprima o resultado na tela.

const palavra = "Batatinha";
let contagem = 0;

for (let letra of palavra) {
    if (letra === "a") {
        contagem++;
    }
}

console.log(`A palavra ${palavra} tem ${contagem} letras A.`);