// Crie uma função que percorra um array com nomes de arquivos. A função deve verificar se
// possui ao menos um arquivo com a extensão ".bat". Caso exista, exibir "vírus detectado",
// caso contrário, exibir "nenhum vírus encontrado".

const arquivos = ["foto.jpg", "jogo.exe", "programa.json", "jogo.lua", "4rk1v0.bat"];

const verificacao = arquivos.some((arquivo) => {
    const result = arquivo.indexOf(".bat"); //se nao encontrar, retorna -1
    return result !== -1;
});

if (verificacao) {
    console.log("vírus detectado");
} else {
    console.log("nenhum vírus encontrado");
}