"use strict";
// type Person ={
//     id: number
//     name: string,
//     age: number,
//     gender: boolean
// }
let chinhPerson = {
    id: 1,
    name: "chinhpd5",
    age: 30,
    gender: true,
    greeting() {
        return `Xin chào ${this.name}`;
    },
};
console.log(chinhPerson.id); // có thể đọc
// chinhPerson.id = 2; // Không thể gán
chinhPerson.name = "chinhpd5 new";
console.log(chinhPerson.name);
let chinhUser = {
    id: 1,
    name: "chinhpd5",
    age: 30,
    gender: true,
    greeting() {
        return `Xin chào ${this.name}`;
    },
    role: true
};
let myPoint = {
    x: 1,
    y: 1,
};
