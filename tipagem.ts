//declaração tipo de variavel
let nome: string = "John";
let idade: number = 25;
let ativo: boolean = true;

//tipagem arrays objetos

let numeros: number[] = {1,2,3,4,5};

interface Pessoa{
    nome: string
    idade: number

}

//function
function soma(a: number, b: number): number{
    return a + b;
}

let resultado: number = soma (a: 5, b: 3);
//let erro: number = soma(5,"3")


class Carro{
    marca: string;
    ano: number;

    constructor(marca: string, ano: number){
        this.marca = marca
        this.ano = ano
    }

    descricao(): string{
        return `${this.marca} - ${this.ano}`;
    }
}
