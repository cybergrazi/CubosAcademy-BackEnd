// Introdução ao conceito de Arrays.

// const nome1 = "Maria";
// const nome2 = "José";
// const nome3 = "Fernanda";

const nomeEstudantes = ["Maria", "José", "Fernanda", "Catarina", "Elizabeth"];
const notaEstudantes = [9, 10, 8, 6, 5];

console.log(nomeEstudantes);
console.log(nomeEstudantes[0]);
console.log(nomeEstudantes[1]);
console.log(nomeEstudantes[2]);
console.log(nomeEstudantes[3]);
console.log(nomeEstudantes[4]);
console.log(nomeEstudantes[5]); //undefined
console.log(notaEstudantes);

// alterando o conteúdo do array:

nomeEstudantes[1] = "Larisa";
console.log(nomeEstudantes[1]);