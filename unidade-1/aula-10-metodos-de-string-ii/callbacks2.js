// Complemento do conceito de callbacks com setInterval.

let numero = 10;

const contador = setInterval(function () {
    console.log(numero);
    numero--;
    if (numero === 0) {
        console.log("BOOOOOOM!");
        clearInterval(contador);
    }
}, 1000);