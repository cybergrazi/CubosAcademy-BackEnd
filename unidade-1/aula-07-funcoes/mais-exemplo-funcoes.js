const pessoa1 = {
    nome: "Grazi",
    idade: 29,
    profissao: "modelo"
};

const pessoa2 = {
    nome: "Gabriel",
    idade: 28,
    profissao: "piloto"
};

const pesssoa3 = {
    nome: "Luna",
    idade: 7,
    profissao: "miar"
};

function apresentacao(pessoa) {
    if (pessoa.idade < 21) {
        console.log(`Sou ${pessoa.nome} sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome} sou um(a) adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou ${pessoa.nome} sou um(a) idoso de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

apresentacao(pessoa1);