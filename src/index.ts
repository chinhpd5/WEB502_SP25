// tsc -init tạo tsconfig.json
// sửa nội dung trong tsconfig
// tạo file src/index.ts và nhập nội dung
// tạo file index.html và link dist/index.js bằng thẻ script
// tsc -w

// string
let myName: string = "chinhpd5";
let myHome: string = 'Hà Nội';
let greeting: string = `Chào mừng bạn ${myName}`

// console.log(greeting.length);

// number
let myAge: number = 20;
let price: number = 1.222;

// console.log(price.toFixed(2));

// boolean
let myGender: boolean= true;

if(myGender){
    console.log("Nam");
    
}else{
    console.log('Nữ');
    
}

// function 
function sayHello(name:string):string {
    return `Xin chào ${name}`
}

// console.log(sayHello('chinhpd5'));

let sayHello1 = function (name:string):void{
    console.log(`Chào mừng bạn ${name}`);
}
// sayHello1("chinhpd5")

let sayHello2 = (age:number):string =>{
    return `Bạn ${age} tuổi`
}

// console.log(sayHello2(20));


/**
 * 1. Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
 * 2. Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
 * 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
 * 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
 */






