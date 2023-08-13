// Introdução ao método filter.

const numeros = [1, 4, 4, 5, 3, 1, 8];

const resultado = numeros.filter((numero) => {
    return numero !== 4;
});

console.log(resultado);