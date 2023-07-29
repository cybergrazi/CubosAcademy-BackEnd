// Como fazer desestruturação de arrays.

const array = [1, 2, 3, 4, 5, 6];

const [a, b, ...resto] = array; //criando novas variáveis com relação ao array
// o resto precisa sempre ser o último.
console.log(a, b);
console.log(resto);