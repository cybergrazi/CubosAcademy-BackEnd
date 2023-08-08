// Faça uma função que, dado um determinado conjunto de dados, descarta os primeiros e 
// os últimos 10% de dados, aproveitando apenas os 80% centrais.

function filtrar80(dados) {
    const primeiros10 = Math.round(dados.length * 0.1);
    const ultimos90 = Math.round(dados.length * 0.9);
    const filtro = dados.slice(primeiros10, ultimos90);
    console.log(filtro)
}


const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

filtrar80(dados);

