// Em alguns países é comum que se utilize . ao invés de vírgula para separação
// de casas decimais. Faça um programa que altere uma string desse formato
// para o formato com vírgula. 

const str = "99.99";
//const numeroString = String(str);    -> altera o number para string

const strAlterada = str.replace(".", ",");

console.log(strAlterada);