// Introdução ao indexOf.

// tentar saber se um e-mail é válido:
const email = "grazi.fofa@cubos.academy";

const indexArroba = email.indexOf("@");
const indexPontoPosArroba = email.indexOf(".", indexArroba);

if (indexPontoPosArroba > indexArroba) { // ponto está após o @
    console.log("E-mail atende as requisições.");
} else {
    console.log("Não há nenhum ponto pós @.");
}