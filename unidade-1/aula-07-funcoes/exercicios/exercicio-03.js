// Faça uma função de apresentação que, por sua vez, chama a função que 
// determina a faixa etária. No fim das contas, a saída deve ser como no
// exemplo: "Olá, meu nome é João, sou um Jovem de 12 anos, 1.4 m de altura
// e sou estudante". A palavra jovem, neste exemplo, deve vir do retorno da função.

const usuario = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
};

function faixaEtariaFunction(idade) {
    if (idade > 60) {
        return "Idoso";
    } else if (idade < 20) {
        return "Jovem";
    } else {
        return "Adulto";
    }
};

function apresentacao(usuario) {
    const faixaEtaria = faixaEtariaFunction(usuario.idade);
    console.log(`Olá! Meu nome é ${usuario.nome}, sou um ${faixaEtaria} de ${usuario.idade} anos, ${usuario.altura}m de altura e sou ${usuario.profissao}.`);
};

apresentacao(usuario);
