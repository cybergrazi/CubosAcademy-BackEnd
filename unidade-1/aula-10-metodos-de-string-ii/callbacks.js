// Introdução ao conceito de callbacks com setTimeout.

const imprimirNome = () => {
    console.log("Grazi");
}

setTimeout(imprimirNome, 2000);

//ou

setTimeout(() => {
    console.log("Vidal");
}, 2000);

// ou

setTimeout((function imprimirFrase() { console.log("Olá, tudo bem?") }), 3000);