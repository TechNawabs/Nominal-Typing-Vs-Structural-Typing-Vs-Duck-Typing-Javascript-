class Student {
    public String name;

    public Student (String name) {
        this.name = name;
    }
};

class Teacher {
    public String name;

    public Teacher (String name) {
        this.name = name;
    }
};

Student student = new Student("Rakesh");
Teacher teacher = new Teacher("Rakesh");

System.out.println(student.equals(teacher)); // => false
System.out.println(teacher.equals(student)); // => false

class MakeWish {
    
    public static void wishStudent(Student student) {
        System.out.println("Hey "+student.name+", make a wish!");
    }

    public static void wishTeacher(Teacher teacher) {
        System.out.println("Hey "+teacher.name+", make a wish!");
    }
}

MakeWish.wishStudent(student); // => Hey Rakesh, make a wish!
MakeWish.wishStudent(teacher); // => Hey Rakesh, make a wish!




Languages:
    C++
    C#
    Java

















ds;