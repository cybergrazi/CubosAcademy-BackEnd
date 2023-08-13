// Filtrar todos os professores backend e filtrar todos os professores frontend
// no array de professores abaixo:

const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" }
];

const filtroBack = professores.filter((professor) => {
    return professor.stack === "backend";
});

const filtroFront = professores.filter((professor) => {
    return professor.stack === "frontend";
});

console.log(filtroBack);
console.log(filtroFront);