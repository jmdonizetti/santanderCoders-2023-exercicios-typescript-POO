"use strict";
//Crie uma classe Student com propriedades name e grades (um array). Adicione um método que calcula a média das notas.
class Student {
    constructor(name, grades = []) {
        this.name = name;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    calculateAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    }
}
let a1 = new Student('João');
a1.addGrade(10);
a1.addGrade(8);
a1.addGrade(9);
a1.addGrade(6);
a1.addGrade(8);
console.log(`As notas informadas foram ${a1.grades} então sua média é de: ${a1.calculateAverage().toFixed(2)}`);
