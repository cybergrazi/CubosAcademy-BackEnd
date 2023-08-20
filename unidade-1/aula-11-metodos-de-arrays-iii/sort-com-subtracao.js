// sort - ordenação numérica com subtração.

const numeros = [3, 20, 13, 50, 1, 4, 2, 13];

// Ordenação de forma crescente.
numeros.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento - segundoElemento; // forma simplificada para ordenar de forma crescente
});

console.log(numeros);

// Ordenação de forma decrescente.
numeros.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento - primeiroElemento;
});

console.log(numeros);