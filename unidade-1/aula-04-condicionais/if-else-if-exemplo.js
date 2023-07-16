// Verificar se uma pessoa pode ou não entrar no cinema.

const temIngresso = true;
const censura = 16;
const idadePessoa = 15;

if (temIngresso === true) {
    if (idadePessoa >= censura) {
        console.log("Pode entrar.");
    } else {
        console.log("Não pode entrar pois não tem idade suficiente.");
    }
} else {
    console.log("Não pode entrar pois não tem ingresso.");
}