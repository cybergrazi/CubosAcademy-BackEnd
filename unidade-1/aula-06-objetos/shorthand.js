// Introdução a Shorthand - guardar um objeto dentro de um outro objeto.

const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
};

const pessoa = {
    nome: "Grazi",
    altura: 1.69,
    peso: 75,
    // carro: carro
    carro // quando os nomes são os mesmos, o JS permite não precisar escrever pela segunda vez.

    // carro: { 
    //     marca: "Toyota",
    //     modelo: "Etios",
    //     ano: 2020,
    //     potencia: 80
};


console.log(pessoa.carro);
console.log(pessoa.carro.marca);