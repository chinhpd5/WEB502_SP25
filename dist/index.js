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
// if(myGender){
//     console.log('Nam');
// }else{
//     console.log('Nữ');
// }
function sayHello(name) {
    return `Xin chào ${name}`;
}
// console.log(sayHello("chinhpd5"));
let sayHello2 = function (age) {
    console.log(`Tuổi của bạn ${age}`);
};
// sayHello2(20)
let sayHello3 = (home) => {
    return `Quê quán: ${home}`;
};
// console.log(sayHello3("Hà Nội"));
/**
 * 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
 * 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
 * 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
 * 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
 */
