class Pessoa {
    nome;
    idade;

    constructor(){
        this.nome = 'teste',
        this.idade = 20;
    }

    descrever() {
        console.log(` Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const p = new Pessoa();

const eu = new Pessoa();
eu.nome = 'jailson';
eu.idade = 30;

console.log(eu)
console.log(p)