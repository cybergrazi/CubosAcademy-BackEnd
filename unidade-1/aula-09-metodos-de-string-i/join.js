// Introdução ao método join, com o exemplo do exercício 01.

function inverterTexto(texto) { // primeiro vamos ter que modificar para array
    const arrayDeLetras = texto.split(""); // vai quebrar caractere por caractere em array
    arrayDeLetras.reverse(); // inverte todo o array

    let strInvertido = arrayDeLetras.join(""); // join colocando em strInvertido todo o array que já tinha sido invertido
    console.log(strInvertido);
}

inverterTexto("Cubos Academy");