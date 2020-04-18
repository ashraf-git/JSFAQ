class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}

const heroPerson = new Person('Hero', 'Balam', 15000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 45000);
console.log(friendlyPerson);

function person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person1("Sabir", "Uddin", 10000);
console.log(oldPerson);