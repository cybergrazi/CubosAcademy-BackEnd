// Declare uma variável que armazena um objeto contendo as sequintes propriedades:
// nome, idade, altura, temCNH e apelidos. Depois faça um programa que imprime na tela
// o texto "José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos"

const pessoa = {
    nome: "Carolina",
    idade: 29,
    altura: 1.69,
    temCNH: "possui CNH",
    apelidos: ["Carol", "Cah"]
};
// ternário abaixo: condição / valor true / valor false
const textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";

// if (pessoa.temCNH === true) {
//     pessoa.temCNH = "possui CNH";
// } else {
//     pessoa.temCNH = "não possui CNH";
// }

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos:`);

for (let item of pessoa.apelidos) { // esse for é para imprimir uma lista de forma correta
    console.log(`- ${item}`);
}