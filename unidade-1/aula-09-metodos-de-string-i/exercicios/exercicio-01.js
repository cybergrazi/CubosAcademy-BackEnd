// Faça uma função que recebe parâmetros do tipo string e imprime na tela essa string invertida,
// ou seja, de trás para frente. 

function inverterTexto(texto) { // primeiro vamos ter que modificar para array
    const arrayDeLetras = texto.split(""); // vai quebrar caractere por caractere em array
    arrayDeLetras.reverse(); // inverte todo o array

    let strInvertido = ""; // string vazia para colocar aqui dentro todas as partes do array invertido
    for (let letra of arrayDeLetras) { // para cada letra do array de letras (que já foi invertido na linha 6)
        strInvertido += letra; // atribui à string final o valor dela mesma mais a letra do array de letras que está sendo percorrida pelo loop
    }
    console.log(strInvertido);
}

inverterTexto("Cubos Academy");