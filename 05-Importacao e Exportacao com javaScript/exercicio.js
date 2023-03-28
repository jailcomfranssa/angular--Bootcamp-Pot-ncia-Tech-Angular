/**
 * uma sala contem 5 alunos e para cada aluno foi sorreado um número de 1 - 100
 * faça um programa que receba os 5 sorteados para os alunos e mostre o maior número sorteado.
 * 
 * dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * saída:
 * 98
 */

const {gets, prints} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for(let i = 0; i < 5; i++){
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);

}

prints(numerosSorteados);
let maiorValor = -1;

for(let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteados = numerosSorteados[i];

    if(numeroSorteados > maiorValor){
        maiorValor = numeroSorteados;

    }

}

prints(maiorValor);
