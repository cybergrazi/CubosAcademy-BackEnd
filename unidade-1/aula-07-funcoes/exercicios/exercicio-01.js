// Declare uma variável que armazena um objeto contendo dados de uma pessoa: nome, idade,
// profissão e altura. Faça uma função que tem um parâmetro e não retorna valores. Essa
// função deve imprimir na tela a apresentação de uma pessoa, seguindo o modelo abaixo:
// "Olá! Meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou estudante."

const pessoaObj = {
    nome: "Romeu",
    idade: 25,
    altura: 1.85,
    profissao: "músico"
}



function apresentacao(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} m de altura e sou ${pessoa.profissao}.`);
}

apresentacao(pessoaObj);

