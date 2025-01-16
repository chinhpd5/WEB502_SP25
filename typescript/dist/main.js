"use strict";
// tsc -init tạo file tsconfig
// thay đổi nội dung của file config
// tạo file src/main.ts và gõ nội dung
// biên dịch: tsc --watch hoặc tsc -w
// tạo file index.html
// liên kết dist/main.js vào index.html
// string
let myName = "chinhpd5";
let myHome = 'Hà Nội';
let greeting = `Xin chào ${myName}`;
// console.log(greeting.toUpperCase());
// number
let myAge = 20;
let price = 2.12345;
// console.log(price.toFixed(3));
// boolean
let myGender = true;
// if(myGender){
//     console.log(`Giới tính Nam`);
// }else{
//     console.log(`Giới tính Nữ`);
// }
// function 
function sayHello(name) {
    return `Chào mừng bạn ${name}`;
}
// console.log(sayHello("chinhpd5"));
let sayHello2 = function (age) {
    console.log(`Tuổi của bạn: ${age}`);
};
// sayHello2(20)
let sayHello3 = (home) => {
    return `Quê quán: ${home}`;
};
// console.log(sayHello3("Hà Nam"));
/**
 * 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
 * 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
 * 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
 * 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
 */
// Câu 1:
function question1(a, b) {
    return `Chu vi: ${(a + b) * 2}, Diện tích: ${a * b}`;
}
// console.log(question1(3,5));
// Câu 2:
function question2(...rest) {
    // console.log(rest);
    let total = 0;
    rest.forEach((item) => {
        // console.log(item);
        total += item;
    });
    return total;
}
// console.log(question2(1,2,3,4,5));
// console.log(question2(1,2,3,4,5,6,7,8,9));
// câu 3:
function question3(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == letter) {
            count++;
        }
    }
    return count;
}
// console.log(question3('xin chao cac ban','n'));
// Câu 4:
function question4(num) {
    if (num <= 0)
        return false;
    if (num <= 2)
        return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
// console.log(question4(9));
