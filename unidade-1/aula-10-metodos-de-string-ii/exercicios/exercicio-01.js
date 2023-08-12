// Crie uma função que receba um array de objetos de usuários que contém as propriedades
// nome e idade. A função deve validar se todos os usuários são maiores de idade. Caso
// todos sejam maior de idade, deverá exibir a mensagem "Festa liberada!", caso contrário,
// exibir "Possui menor de idade".

const usuarios = [
    { nome: "Grazi", idade: 18 },
    { nome: "Fernanda", idade: 11 },
    { nome: "Camila", idade: 20 }
];

const fiscalizarIdade = (arrayObjetos) => {
    const resultado = arrayObjetos.every((elemento) => {
        return elemento.idade > 17;
    });

    if (resultado) {
        console.log("Festa liberada!");
    } else {
        console.log("Possui menor de idade");
    }
}

fiscalizarIdade(usuarios);