// Introdução ao método every.

const frutas = ["acabaxi", "manga", "melancia"]; //Array de referência

const resultado = frutas.every((elementoAtual) => { //Constante com a função every com uma outra função dentro
    return elementoAtual !== "banana";
});

console.log(resultado);

//Outra forma:
const resultado2 = frutas.every(function (elementoAtual) {
    return elementoAtual !== "manga";
});

console.log(resultado2);

//Outro exemplo:
const numeros = [1, 2, 3, 4];

const resultadoNumero = numeros.every((elementoNumero) => {
    return elementoNumero < 5;
});

console.log(resultadoNumero);