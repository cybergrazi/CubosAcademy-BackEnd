// Crie um objeto que represente o cartão de consumo de um cliente. Deve ter: nome do cliente,
// idade, produtos consumidos. Cada produto pode ter: nome do produto, preço unitário (centavos),
// quantidade comprada. coloque pelo menos 3 produtos.

const produtoConsumido = {
    sabonete: {
        nome: "Sabonetinho",
        preco: 1000,
        quantidade: 2
    },
    gloss: {
        nome: "Brilhinho",
        preco: 1500,
        quantidade: 1
    },
    sombra: {
        nome: "Sombrinha",
        preco: 3000,
        quantidade: 1
    }
}

const cartao = {
    nome: "Helena",
    idade: 44,
    produtoConsumido
};

console.log(cartao);