// Exercício Slice
// Obter apenas 2 dígitos de uma cidade.

const cidade = "Salvador - BA";

const indexTracinho = cidade.indexOf(cidade.includes("-"));
const estado = cidade.slice(indexTracinho - 1);

console.log(estado);

// Como o professor resolveu:
// const penultimoIndex = cidade.length - 2;
// let estado = cidade.slice(penultimoIndex);