const pessoa = {
    nome: "Grazi",
    idade: 29,
    profissao: "modelo",
    apresentar: function () { //função anônimma pois não tem nome
        //essa função apresentar é chamada de método
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Sou ${this.nome} sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    }
}

pessoa.apresentar();