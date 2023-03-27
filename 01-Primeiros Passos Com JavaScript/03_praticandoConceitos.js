/**
 * 1) Faça um algotitimo que dado as 3 notas tiradas por um aluno em um sementre da faculdade calcule e 
 * imprima a sua media e a sua classificação conforme a tabela a baixo.
 * 
 * Media  = (nota1 + nota2+ nota3) /3;
 * 
 * classificação:
 * Média nenor que 5 reprovado;
 * Media entre 5 e 7 recuperação;
 * Média acima de 7 passou.
 * 
 */

let nota1 = 7;
let nota2 = 6;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
    console.log("Reprovado !!");

} else if (media > 5 && media < 7) {
    console.log("Recuperação !!");

} else {
    console.log("Aprovado !!");
}

/**
 * Calculo IMC
 * IMC = peso / (altura*altura)
 * abaixo de 18,5 = abixo do peso;
 * entree 18.5 e 25 = peso normal;
 * entre 25 e 30  = acima do peso;
 * entre 30 e 40 = obeso;
 * acima de 40 = obesidade grave; 
 */

const peso = 65;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18, 5) {
    console.log("Abaixo do Peso");

} else if (imc >= 18, 5 && imc < 25) {
    console.log("Peso Normal");

} else if (imc >= 25 && imc < 30) {
    console.log("acima do peso");

} else if (imc >= 30 && imc < 40) {
    console.log("Obeso");

} else {
    console.log("obesidade grave");
}

/**
 * Códogo condição de pagamento
 * - à vista débito, receber 10% de desconto;
 * - á vista no dinheiro ou PIX, recebe 15% de desconto;
 * - em duas vezes, preço normal de etiqueta sem juros;
 * - acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

const precoEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));

} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));

} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);

} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}