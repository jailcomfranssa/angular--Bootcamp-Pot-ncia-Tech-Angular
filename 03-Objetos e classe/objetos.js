const pessoa = {
    nome: 'Jailson',
    idade: 25
}

pessoa.altura = 2.00

console.log(pessoa);

const pessoa2 = {
    nome: 'Jailson',
    idade: '25',

    descrever: function () {
        console.log(` Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa2.descrever();
console.log(pessoa2['nome']);