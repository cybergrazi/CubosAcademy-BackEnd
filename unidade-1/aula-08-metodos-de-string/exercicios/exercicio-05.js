// transforme "jose messias junior" em Jose Messias Junior.

const nomeCompleto = "jose messias junior";
let arrayNome = nomeCompleto.split(" ");

let nomeFormatado = "";
for (nome of arrayNome) {
    let primeiraLetra = nome.slice(0, 1);
    let restoNome = nome.slice(1); // parâmetro final não precisa quando é até o fim
    nomeFormatado += primeiraLetra.toUpperCase() + restoNome + " ";
}

console.log(nomeFormatado.trim()); // tira o espaço do final