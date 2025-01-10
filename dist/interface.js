"use strict";
let chinhUser = {
    id: 1,
    email: "chinhpd5@fe.edu.vn",
    password: "123456",
    role: true,
    greeting() {
        return `Xin chào ${this.email}`;
    },
    name: "chinhpd5"
};
// chinhUser.id = 3;
chinhUser.email = 'chinhpd6@fe.edu.vn';
console.log(chinhUser);
let namAdmin = {
    id: 2,
    email: "admin@fe.edu.vn",
    password: "123456",
    role: false,
    name: "nam",
    age: 30,
    description: "mô tả"
};
