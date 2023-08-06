// Em outros países é comum que se utilize vírgula ao invés do ponto para a 
// separação em milhar. Faça um programa que altere uma string desse formato
// para o formato que conhecemos no Brasil, com ponto.

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
};

let numero = "1,350,000";

console.log(replaceAll(numero, ",", "."));