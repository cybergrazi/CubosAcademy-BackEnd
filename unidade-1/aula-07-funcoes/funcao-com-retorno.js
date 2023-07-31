// Como realizar funções com retorno.
// Verificar se uma pessoa é maior de idade

function verificarMaioridade(idade) {
    if (idade >= 18) {
        // maior 
        return true; // sempre que chega na linha return, o loop para instantaneamente
    } else {
        //nao eh
        return false;
    }
}

const valorRetornadoPelaFuncao = verificarMaioridade(17);

console.log(valorRetornadoPelaFuncao);