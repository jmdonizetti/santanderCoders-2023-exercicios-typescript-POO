//Crie uma classe Rectangle com propriedades width e height. Adicione um método que calcula a área do retângulo.

class Rectangle {
    width: number;
    height: number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    };

    calculaArea(): number {
        return this.width * this.height;
    }
}

let r1 = new Rectangle(10, 2);
let r2 = new Rectangle(10, 3);

console.log(r1.calculaArea(), r2.calculaArea());

//2:4:14