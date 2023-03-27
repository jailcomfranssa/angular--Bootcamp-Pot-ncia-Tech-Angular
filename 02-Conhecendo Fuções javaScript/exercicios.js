function escreverNome(nome) {
    console.log('Meu nome é: ' + nome);

}

escreverNome('Jailson');

function maiorIdade(idade) {

    if (idade < 18) {
        return console.log('menor idade');

    } else {
        return console.log('maior idade');
    }

}

maiorIdade(18);

function desconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));

}

function juros(valor, desconto) {
    return (valor + (valor * (desconto / 100)));

}

const precoEtiqueta = 100;
const formaDePagaento = 1;

if (formaDePagaento === 1) {
    console.log(desconto(precoEtiqueta, 10));

} else if (formaDePagaento === 2) {
    console.log(desconto(precoEtiqueta, 15));

} else{
    console.log(juros(precoEtiqueta, 10));
}


