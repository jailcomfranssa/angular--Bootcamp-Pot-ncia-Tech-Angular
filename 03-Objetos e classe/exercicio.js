/**
 * criar classe para representr carro
 * os carros possiem ua marca uma cor e u gasto medio de combustivel
 * por km rodado, criar um metodo que dado a quantidade de quilometrso
 * e o preço do combustivel nos de o valor gasto
 * em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm

    }

    calcularGastoDePercuso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;

    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);

console.log(uno.calcularGastoDePercuso(70, 5));

/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizr o valor do seu IMC
 * (IMC = peso/(altura * altura));
 * Instancie uma pessoa chamada José que tenha 70kg de peso
 * e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        this.peso / (Math.pow(this.altura, 2));
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose);
console.log(jose.calcularIMC());