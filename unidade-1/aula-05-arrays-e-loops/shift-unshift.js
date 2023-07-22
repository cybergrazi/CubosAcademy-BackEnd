// Introdução a shift e unshift.

const nomeEstudantes = ["Maria", "José", "Fernanda", "Catarina", "Elizabeth"];

const primeiro = nomeEstudantes.shift(); // transfere o primeiro elemento para essa nova variável
console.log(primeiro);

nomeEstudantes.shift(); // remove o primeiro elemento do array
console.log(nomeEstudantes);

nomeEstudantes.unshift("Maria"); // coloca um elemento no início do array
console.log(nomeEstudantes);