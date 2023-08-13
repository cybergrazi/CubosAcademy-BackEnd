// Introdução ao método findIndex.

const carros = [
    { nome: "tt", marca: "audi", ano: 2021, cor: "preto" },
    { nome: "versa", marca: "nissan", ano: 2018, cor: "azul" },
    { nome: "idea", marca: "fiat", ano: 2019, cor: "rosa" },
    { nome: "corolla", marca: "toyota", ano: 2023, cor: "prata" }
];

const resultado = carros.findIndex((carro) => {
    return carro.nome === "idea";
});

console.log(resultado);