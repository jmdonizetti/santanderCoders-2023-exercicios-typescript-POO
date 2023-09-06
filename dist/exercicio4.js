"use strict";
//Crie uma classe Car com propriedades make, model e year. Crie um método que retorna a descrição do carro.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescriptionCar() {
        return `Marca:${this.make}, Modelo:${this.model} e Ano:${this.year}`;
    }
}
// let car: Car = new Car();
const myCar = new Car('BMW', 'x6', 2023);
const description = myCar.getDescriptionCar();
console.log(description);
