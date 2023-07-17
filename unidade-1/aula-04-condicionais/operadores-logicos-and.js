// Introdução aos operadores lógicos and (&&).
// Utilizando o exemplo do else if.

// &&
const temIngresso = true;
const censura = 16;
const idadePessoa = 16;

if (temIngresso === true && idadePessoa >= censura) {
    console.log("Pode entrar.");
} else {
    console.log("Barrado.");
}