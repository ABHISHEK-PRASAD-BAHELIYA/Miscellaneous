// const  stu1 = {
//     name: "Atul kumar",
//     age: 21,
//     marks: 96,
//     getmarks: function() {
//         return this.marks;
//     }, 
// };

// const  stu2 = {
//     name: "Vikash kumar",
//     age: 19,
//     marks: 98,
//     getmarks: function() {
//         return this.marks;
//     }, 
// };

// const  stu3 = {
//     name: "Gaurav kumar",
//     age: 20,
//     marks: 94,
//     getmarks: function() {
//         return this.marks;
//     }, 
// };






// factory function

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("Atul", 20); //copy
// let p2 = PersonMaker("Ram", 22);  //copy


//new operator (contractors)  does not return anythings and start capital letter

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };






//it`s most imporotant
//classes with constractor
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Atul kumar", 23);
// let p2 = new Person("Rohan kumar", 20);
// let p3 = new Person("sandeep kumar", 18);


        //EXAMPLE 01

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// class student extends Person{
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age);
//         this.marks = marks;
//     } 
// }

// // let stu1 = new student("Atul kumar", 23, 85);
// // let stu2 = new student("MRS. ABHISHEK PRASAD BAHELIYA", 20, 95);

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         console.log("student class constructor");
//         super(name, age);
//         this.subject = subject;
//     }
// }


        //EXAMPLE 02

        class  Mammals {
            constructor(name) {  //base class/ parent class
                this.name = name;
                this.type = "warm blooded";
            }
            eat() {
                console.log("I am eating.");
            }
        }

        class Dogs extends Mammals { //child
            constructor(name) {
                super(name);
            }

            bark() {
                console.log("wooff..")
            }
        }

        class cats extends Mammals { //child 
            constructor(name) {
                super(name);
            }

            meow() {
                console.log("meow..")
            }
        }