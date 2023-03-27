const numero = 0;
const eNumeroPar = numero % 2 === 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

//console.log(eNumeroPar)

// if(eNumeroPar){
//     console.log("Executei");
// }

if (eNumeroPar) {
    //console.log("Par");

}

if (!eNumeroPar) {
    //console.log("Impar");

}

if (numero === 0) {
    // console.log("o número é inválido")

} else if (numeroDivisivelPor5) {
    console.log("sim");
} else {
    //console.log("não")
}

let precoEtanol = 5.79;
let precoGasolina = 6.66
let kmPorLitros = 10;
let distanciapecorrido = 100;
const tipoCombustivel = "Etanol";
const litrosConsuido = distanciapecorrido / kmPorLitros;

if (tipoCombustivel === "Etanol") {

    const valorGasto = litrosConsuido * precoEtanol;
    console.log("valor Gasto: " + valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsuido * precoGasolina;
    console.log("valor Gasto: " + valorGasto.toFixed(2));
}




