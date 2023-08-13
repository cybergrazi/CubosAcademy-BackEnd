// Crie uma função que receba o nome da marca de um carro e um array de objetos contendo
// as propriedades nome, marca, ano, cor. A função deve encontrar os dados do carro, a
// partir do nome da marca, no array passado como argumento e deve exibir todos os dados 
// como retorno.

const carros = [
    { nome: "tt", marca: "audi", ano: 2021, cor: "preto" },
    { nome: "versa", marca: "nissan", ano: 2018, cor: "azul" },
    { nome: "idea", marca: "fiat", ano: 2019, cor: "rosa" },
    { nome: "corolla", marca: "toyota", ano: 2023, cor: "prata" }
];

const buscarCarro = (marca, arrayDeCarros) => {
    return arrayDeCarros.find((carro) => {
        return carro.marca === marca;
    });

};
const resultado = buscarCarro("fiat", carros);

console.log(resultado);
