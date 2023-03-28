const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

const nome = 'Jailson'

for (let i = 0; i < nome.length; i++) {
     console.log(nome[i]);
}

let soma = 0;

for (let j = 0; j< notas.length; j++) {
    const nota = notas[j];
    soma = soma + nota;
    

}
const media = soma / notas.length;
console.log(media.toFixed(1));