/**
 * Crie um programa que dado um numero imprima a sua tabuada.
 */
const num = 5

for (let i = 1; i <= 10; i++) {
    console.log(i * num);



}

/*
crie um programa que seja capaz de percorrer uma lista de números é 
imprima cada numero par e impar encontrado.
*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

    const num = i;
    
    if(num % 2 == 0){
        console.log('o numero: ' + i + ' é par');

    }
    else if(! num % 2 == 0){
        console.log('o numero: ' + i + ' é impar');
    }
    console.log();

}