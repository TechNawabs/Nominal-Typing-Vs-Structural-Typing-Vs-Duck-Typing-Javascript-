class Student {
    constructor (name) {
        this.name = name;
    }
}

class Teacher {
    constructor (name) {
        this.name = name;
    }
}

const student = new Student("Ramesh");
const teacher = new Teacher("Ramesh"); 

class MakeAWish {
    static makewish (message) {
        console.log(`Hey ${message.name}, make a wish! `);
    } 
}

MakeAWish.makewish(student); // Hey Ramesh, make a wish!
MakeAWish.makewish(teacher); // Hey Ramesh, make a wish!














Languages:
    Javascript