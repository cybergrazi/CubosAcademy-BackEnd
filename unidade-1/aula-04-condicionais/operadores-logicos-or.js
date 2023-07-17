// Introdução aos operadores lógicos or (||)
// Utilizando o exemplo do else if.

const temIngresso = true;
const censura = 16;
const idadePessoa = 15;
const estaComOsPais = true;

if (temIngresso === true) {
    if (idadePessoa >= censura || estaComOsPais === true) {
        console.log("Pode entrar no cinema.");
    } else {
        console.log("Barrado.");
    }
} else {
    console.log("Barrado.");
}