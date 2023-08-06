// Faça uma função chamada imprimir data que tem 3 parâmetros: dia, mês e ano.
// Essa função deve imprimir na tela a data passada como argumento no seguinte
// formato, de modo que ela sempre tenha 8 dígitos: 01/01/2021, 18/02/1999

function imprimirData(dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0"); // outra forma de transformar number em string
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1, 2021);