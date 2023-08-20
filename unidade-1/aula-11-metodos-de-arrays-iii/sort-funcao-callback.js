// Aplicação do método sort com função callback.

const numeros = [3, 20, 13, 50, 1, 4, 2, 13];

// Ordenação de forma crescente.
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) { //se o primeiro for menor que o segundo, ele passa o segundo elemento para a primeira posição
        return -1;
    }
    if (segundoElemento < primeiroElemento) { //se o segundo for menor que o primeiro, ele mantem o primeiro elemento para a primeira posição
        return 1;
    }
    return 0;
});

console.log(numeros);

// Ordenação de forma decrescente.
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return 1;
    }
    if (segundoElemento < primeiroElemento) {
        return -1;
    }
    return 0;
});

console.log(numeros);