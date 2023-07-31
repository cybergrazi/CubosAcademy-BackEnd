// Faça uma função que tem um parâmetro chamado idade e que determina a faixa
// etária de uma pessoa a partir dessa idade. 21 ou menos: jovem / 22 a 65:
// adulto / 66 ou mais: idoso. Sua função deverá retornar um string que
// informa se a pessoa é jovem, adulto ou idoso.

function faixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Idoso";
    } else {
        return "Adulto";
    }
}

const functionReturned = faixaEtaria(65);

console.log(`A faixa etária de Joãozinho é ${functionReturned}.`);