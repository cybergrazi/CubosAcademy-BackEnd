// Introdução aos comparadores de identidade (boolean)

const x = 10;
const y = "10";

const ehIdentico = x === y; //ambos são tipo number e tem o mesmo valor
console.log(ehIdentico);

const compa = y == x; //comparadores não comparam o tipo da variável
console.log(compa);

const naoIdentico = y !== x; //true pois não são idênticos
console.log(naoIdentico);