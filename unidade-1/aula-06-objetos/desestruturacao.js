// Introdução à desestruturação de objetos - Destructuring.

const pessoa = {
    nome: "Grazi",
    idade: 29,
    cidade: "São Paulo",
    profissao: "Modelo"
};
//é uma forma de acessar itens de objetos grandes, para não ter que ficar percorrendo
// const nome = pessoa.nome; 
// const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa;
// o nome da variável a ser criada tem que ser o mesmo nome da variável do objeto

console.log(nome, idade);
console.log(outros);