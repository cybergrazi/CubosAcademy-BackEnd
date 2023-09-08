const express = require("express"); // aqui importa-se o pacote do express para dentro do servidor.

const app = express(); // chamamos o método do express quando iniciamos o app.

const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 17 }
];

app.get("/usuarios", (req, res) => {
    res.send(usuarios); // método send responde algo para a requisição.
});

app.listen(3000, () => {
    console.log("Servidor incializado na porta 3000.");
}); // o método listen precisa ser sempre o último método que implementamos no servidor.
// o listen escuta a porta que foi passada como parâmetro.
// a arrow function dentro da função listen imprime no servidor a mensagem desejada.