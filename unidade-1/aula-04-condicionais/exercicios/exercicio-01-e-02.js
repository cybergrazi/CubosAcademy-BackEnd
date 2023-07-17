// Exercício 1: Na compra de um determinado produto, o cliente consegue um desconto de 10% 
// caso pague a vista. Caso queira parcelar, a loja parcela em até 6x sem juros
// mas sem desconto. Imprimir uma mensagem explicando como o cliente tem que 
// pagar, incluindo o valor da parcela.
// Exercício 2: modifique o código para que o cliente possa dividir a compra em até 12x.
// Porém, entre 7x e 12x será aplicada uma taxa de juros de 1% ao mês. Ou seja, utilizar
// a fórmula M = C.(1+i)exp N.

const valorDaCompra = 100;
const numeroDeParcelas = 8;

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompra * 0.1;
    const valorPagar = valorDaCompra - desconto;
    console.log(`Você deve pagar ${valorPagar} reais à vista com 10% de desconto.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const parcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar ${parcela.toFixed(2)} reais em ${numeroDeParcelas} vezes sem juros.`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelado com juros
    const valorPagar = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const parcela = (valorPagar / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${parcela} reais em ${numeroDeParcelas} vezes com juros, totalizando o valor de ${valorPagar}.`)
} else {
    // número de parcelas inválido
    console.log(`A parcela ${numeroDeParcelas} não é válida.`);
}