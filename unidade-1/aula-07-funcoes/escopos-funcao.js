// Esclarecendo algumas coisas sobre os escopos nas funções.

function soma(x, y) {
    let z = 5; //tudo o que é declarado dentro não consigo acessar fora
    return x + y + z;
}

console.log(soma(5, 3));