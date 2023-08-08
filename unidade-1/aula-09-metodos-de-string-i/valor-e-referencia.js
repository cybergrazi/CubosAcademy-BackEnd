let numero1 = 5;
let numero2 = numero1;
numero1 = 10;

console.log(`Numero 1: ${numero1}`);
console.log(`Numero 2: ${numero2}`);

let texto1 = "abra";
let texto2 = texto1;
texto1 = texto1 + "cadabra";

console.log(texto1);
console.log(texto2);

//objetos parecem ser uma coisa só
let obj1 = { propriedade: 5 };
let obj2 = obj1;
obj1.propriedade = 10;

console.log(obj1);
console.log(obj2);

//arrays se comportam dessa mesma forma, como um só.