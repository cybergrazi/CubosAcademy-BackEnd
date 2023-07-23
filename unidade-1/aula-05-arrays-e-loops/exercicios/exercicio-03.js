// Faça um programa que calcula e imprime na tela a soma dos itens de um array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let indice = 0;
let soma = 0;

while (indice < numeros.length) {
    soma = soma + numeros[indice];
    indice++
}

console.log(soma);

// O professor resolveu assim:

// for let (indice = 0; i < numeros.length; i++){
//     soma = soma + numeros[indice];
// }

// console.log(soma);