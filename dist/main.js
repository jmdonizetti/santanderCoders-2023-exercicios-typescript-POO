"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saudacao() {
        console.log(`Ola ${this.name} seja bem-vindo!`);
    }
}
//Instanciando obj na classe Person
let p1 = new Person('Apollo', 3);
let p2 = {
    name: 'João',
    age: 25,
    saudacao() {
        console.log(`Olá ${this.name} seja bem vindo`);
    },
};
console.log(p1.saudacao());
console.log(p2.saudacao());
