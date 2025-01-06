"use strict";
// tsc -init tạo tsconfig
// thay đổi nội dung 
// tạo file src/index.ts
// tsc -w
// tạo file index.html
// link dist/index.js vào index.html
//string
let myName = "Chinhpd5";
let myHome = 'Hà Nội';
let greeting = `Chào mừng bạn ${myName}`;
// console.log(greeting.toLowerCase());
//number
let myAge = 30;
let price = 2.44444;
// console.log(price.toFixed(2));
//boolean
let myGender = true;
if (myGender) {
    console.log('Nam');
}
else {
    console.log('Nữ');
}
