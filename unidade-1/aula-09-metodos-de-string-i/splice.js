// Introdução ao método splice.

let array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f");

console.log(array);
console.log("-------------------------------");

array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f", "g", "h"); //incluindo mais itens

console.log(array);
console.log("-------------------------------");

array = ["a", "b", "c", "d", "e"];
array.splice(1, 0, "f"); //não excluir nada, apenas incluir no índice especificado

console.log(array);