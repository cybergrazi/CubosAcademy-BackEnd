// Introdução ao método some.

const nomes = ["joão", "maria", "grazi", "rodrigo"];

const resultado = nomes.some((nome) => {
    return nome === "grazi";
});

console.log(resultado);

// Outro exemplo:

const numeros = [2, 5, 9, 7];
const result = numeros.some((numero) => {
    return numero % 2 === 0; //validação número par
});

console.log(result);