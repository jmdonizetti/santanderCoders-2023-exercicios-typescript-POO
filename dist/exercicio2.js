"use strict";
//Crie uma classe Rectangle com propriedades width e height. Adicione um método que calcula a área do retângulo.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    calculaArea() {
        return this.width * this.height;
    }
}
let r1 = new Rectangle(10, 2);
let r2 = new Rectangle(10, 3);
console.log(r1.calculaArea(), r2.calculaArea());
//2:4:14
