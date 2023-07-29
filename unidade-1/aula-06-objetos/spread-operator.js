// Introdução a Spread Operator.
// o Spread é ... 

const pessoa = {
    nome: "Grazi",
    idade: 18,
    cidade: "São Paulo",
    profissao: "Modelo"
};

const endereco = {
    rua: "Rua Rosa",
    numero: "11",
    bairro: "Bairro Fofo"
};

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
}

console.log(objetoFundido);