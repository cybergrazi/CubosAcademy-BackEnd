// Crie um array com 5 nomes de países, adicione um país ao fim da lista,
// imprima a lista na tela. Remova um país do fim da lista e imprima a lista na tela.
// Adicione um país no início da lista e imprima a lista na tela. Remova um país do 
// início da lista e imprima a lista na tela. Imprima o último país da lista na tela
// imprima o segundo país da lista na tela e imprima o país de índice 2 na tela.

const paises = ["Brasil", "China", "Tailândia", "Japão", "Filipinas"];

// adicionar 1 país no fim da lista
paises.push("Vietnã");
console.log(paises);

// remover 1 país do fim da lista
paises.pop();
console.log(paises);

// adicionar 1 país no início da lista
paises.unshift("Mongólia");
console.log(paises);

// remover 1 país no início da lista
paises.shift();
console.log(paises);

// imprimir o último país da lista
// const ultimo = paises[paises.lenght -1];
console.log(paises.pop()); //neste caso, removeu da lista e imprimiu.

// imprimir o segundo país da lista 
console.log(paises[1]);

// imprimir o país de indice 2 da lista
console.log(paises[2]);