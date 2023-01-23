var nome = "lucas";
var valor = 12;
var bool = true;
// inferencia de tipo
var nome2 = "lucas"; // o ts assume que é string mesmo sem declarar
function isOdd(numb) {
    if (numb % 2 !== 0) {
        return true;
    }
    return false;
}
var resultado = isOdd(1);
// tipos em funcções 
function sayHello(name) {
    return 'hello' + name;
}
function sayHelloo(name) {
    console.log('hello' + name);
}
//tipos em arrays
var array = ["oi", "1"];
// Operador Union ( | )
var resultadoa = true;
resultadoa = 4;
var arrayy = ["oi", 1];
// Tipos em Objetos
var job = {
    id: 1,
    title: "tech lead"
};
var jobs = [{
        id: 1,
        title: "tech lead"
    }];
// Conectando no banco e Generics
function oi(req, res) {
}
export {};
