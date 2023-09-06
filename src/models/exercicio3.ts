//Crie uma classe Circle com propriedade radius e um método que calcula a área do círculo.

class Circle {
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    
}

let c = new Circle(5);
console.log(`A area do circulo com o raio de ${c.radius} é de ${c.calculateArea().toFixed(2)}`);
