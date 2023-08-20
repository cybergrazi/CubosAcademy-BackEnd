// Ordenação sort padrão de strings, utilizando localeCompare.

const pessoas = ["Joao", "ana", "carlos", "beatriz"];

// Ordenação crescente 
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

// Ordenação descrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);