"use strict";
// tsc -init tạo tsconfig.json
// sửa nội dung trong tsconfig
// tạo file src/index.ts và nhập nội dung
// tạo file index.html và link dist/index.js bằng thẻ script
// tsc -w
// string
let myName = "chinhpd5";
let myHome = 'Hà Nội';
let greeting = `Chào mừng bạn ${myName}`;
// console.log(greeting.length);
// number
let myAge = 20;
let price = 1.222;
// console.log(price.toFixed(2));
// boolean
let myGender = true;
if (myGender) {
    console.log("Nam");
}
else {
    console.log('Nữ');
}
