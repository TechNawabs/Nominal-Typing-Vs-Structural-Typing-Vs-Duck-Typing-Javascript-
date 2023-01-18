class Student {
    name: string;
    constructor (name: string) {
        this.name = name;
    }
}

class Teacher {
    name: string;
    constructor(name: string) {
        this.name = name;
    } 
}

const student = new Student("Rajesh");
const student2 = new Student("Rajesh");
const teacher = new Teacher("Rajesh");

console.log(typeof student == typeof student2); // => false
console.log(typeof student == typeof teacher); // => true

class MakeAWish {
    static wish (wishable: { name: string }) {
        console.log(`Hey ${wishable.name}, make a wish! `);
    }
}

MakeAWish.wish(student); // => Hey Rajesh, make a wish!
MakeAWish.wish(teacher); // => Hey Rajesh, make a wish!










Languages:
    OCaml
    Haskell
    Elm
    TypeScript