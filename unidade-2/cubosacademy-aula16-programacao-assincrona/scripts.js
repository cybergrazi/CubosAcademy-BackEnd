const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

getCityFromZipcode("02215000").then(cidade => { // nesta arrow function, como temos somente um parâmetro na função, pode-se ocultar os parênteses.
    console.log(cidade);

    getStateFromZipcode("02215000").then(uf => {
        console.log(uf);
    });

}).catch(erro => { // catch para pagar o erro
    console.log(erro);
});

(async function () {

})();

//const cidade = getCityFromZipcode("02215000");
