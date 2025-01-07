// tsc -init tạo file tsconfig
// thay đổi nội dung của file config
// tạo file src/main.ts và gõ nội dung
// biên dịch: tsc --watch hoặc tsc -w
// tạo file index.html
// liên kết dist/main.js vào index.html

// string
let myName: string = "chinhpd5";
let myHome: string = 'Hà Nội';
let greeting: string = `Xin chào ${myName}`

// console.log(greeting.toUpperCase());

// number
let myAge: number = 20;
let price: number = 2.12345;

// console.log(price.toFixed(3));

// boolean
let myGender: boolean = true;

// if(myGender){
//     console.log(`Giới tính Nam`);
// }else{
//     console.log(`Giới tính Nữ`);
// }

// function 

function sayHello(name: string): string{
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello("chinhpd5"));

let sayHello2 = function(age: number): void{
    console.log(`Tuổi của bạn: ${age}`);
}

// sayHello2(20)

let sayHello3 = (home:string): string =>{
    return `Quê quán: ${home}`
}

// console.log(sayHello3("Hà Nam"));

/**
 * 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
 * 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
 * 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
 * 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
 */





