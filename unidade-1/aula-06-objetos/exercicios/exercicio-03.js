// Com os dados do exercício anterior, imprima o nome do cliente, a idade do cliente, modifique a idade 
// do cliente, imprima a nova idade do cliente, imprima o nome do primeiro produto consumido e 
// imprima o preço unitário do último produto consumido por ele.

const produtoConsumido = [ // tem que colocar esta variável como array para dar certo
    {
        nome: "Sabonetinho",
        preco: 1000,
        quantidade: 2
    },
    {
        nome: "Brilhinho",
        preco: 1500,
        quantidade: 1
    },
    {
        nome: "Sombrinha",
        preco: 3000,
        quantidade: 1
    }
]

const cartao = {
    nome: "Helena",
    idade: 44,
    produtoConsumido
};

console.log(cartao.nome);
console.log(cartao.idade);

cartao.idade = 48;

console.log(cartao.nome);
console.log(cartao.idade);
console.log(produtoConsumido[0].nome);
console.log(produtoConsumido[produtoConsumido.length - 1].preco);