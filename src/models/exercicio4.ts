//Crie uma classe Car com propriedades make, model e year. Crie um método que retorna a descrição do carro.

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescriptionCar(): string {
        return `Marca:${this.make}, Modelo:${this.model} e Ano:${this.year}`
    }
}

// let car: Car = new Car();

const myCar = new Car('BMW', 'x6', 2023);
const description: string = myCar.getDescriptionCar();

console.log(description);



