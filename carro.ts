class Carro {
    marca: string;
    modelo: string;
    ano: number;
    velocidade: number;

    constructor(marca: string, modelo: string, ano: number, velocidade: number = 0;) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;

    }
    acelerar(incremento: number): void {
        this.velocidade += incremento;
        console.log(`O carro acelerou ${this.velocidade} km/h.`);
    }
    frear(decremento: number): void {
        if (this.velocidade - decremento >= 0) {
            this.velocidade -= decremento;
            console.log(`O carro reduziu a velocidade para ${this.velocidade} km/h.`);
        } else {
            this.velocidade = 0;
            console.log("O carro parou.");
        }
    }
//metd para exibir informações do carro
    exibirinfo(): void{
     console.log (`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Velocidade: ${this.velocidade} km/h`)

    }
}
//crtiando objt da classe carro
const meuCarro = new Carro("Toyota", "Corolla", 2022);
//exibindo info do carro
meuCarro.exibirinfo();
