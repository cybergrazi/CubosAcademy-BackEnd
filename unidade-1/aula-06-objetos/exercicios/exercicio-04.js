// Faça um programa que imprima uma mensagem amigável (que inclui chamar o cliente
// pelo nome) que informa o valor que ele deve pagar.

const produtoConsumido = [
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

let totalPagar = 0;

for (let item of produtoConsumido) {
    totalPagar += item.preco * item.quantidade; // o item do for serve como indice aqui 
}

console.log(`Olá ${cartao.nome}, tudo bem? Obrigado por visitar nossa loja. Você deverá pagar ${(totalPagar / 100).toFixed(2)}.`);