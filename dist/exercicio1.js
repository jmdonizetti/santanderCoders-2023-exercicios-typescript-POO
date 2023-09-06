"use strict";
//Crie uma classe chamada Person com propriedades name e age. Instancie alguns objetos dessa classe.
// Adicione um método à classe Person que imprime uma saudação com o nome da pessoa.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    dizerOi() {
        console.log(`Ola meu nome é ${this.name}, tudo bem?`);
    }
    getSaudacao() {
        return `Olá eu me chamo ${this.name}, e eu tenho ${this.age} anos!`;
    }
}
//Instanciando obj na classe Person
let p1 = new Person('Apollo', 3);
let saudacao = p1.getSaudacao();
p1.dizerOi();
console.log(saudacao);
// let p2: Person = {
//     name: 'João',
//     age: 25,
//     dizerOi() {
//         console.log(`Olá ${this.name} seja bem vindo`);
//     },
// };
// console.log(p1.saudacao());
// console.log(p2.saudacao());
