let variavel = 10;
const pi = 3.14

let soma = 10 + variavel
let sub = 10 - variavel
let mult = 10 * variavel
let div = 10 / variavel

// console.log("hello world")
// console.log(variavel);
// console.log(soma)
// console.log(sub)
// console.log(mult)
// console.log(div)

//Calcular o valor de uma viagem.


/*
--Variavel:
1 - Preço do combustivo
2 - Gasto medio de combustível do carro por KM
3 - Distância em Km da viage

*/

let precoConbustivel = 5.79;
let kmPorLitros = 10;
let distanciapecorrido = 100;

const litrosConsuido = distanciapecorrido / kmPorLitros;
const valorGasto = litrosConsuido * precoConbustivel;

console.log("valor Gasto: "+ valorGasto.toFixed(2));