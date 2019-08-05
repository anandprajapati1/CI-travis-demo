"use strict;"

class Person {
    constructor(firstName = "Jane", lastName = "Doe") {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
export {Person};