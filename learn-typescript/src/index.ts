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

// if(myGender){
//     console.log("Nam");
    
// }else{
//     console.log('Nữ');
    
// }

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

// 1

function question1(a: number, b: number): string {
    return `Chu vi: ${(a+b)*2}, diện tích: ${a*b}`
}

// console.log(question1(2,3));

//2
// spread (...)

function sum(...rest: number[]): number{
    // console.log(rest);

    let total: number = 0;
    rest.forEach((item: number)=>{
        // console.log(item);
        total += item;
    })
    
    return total;
}

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5,6,7));

// 3
function countLetter(text: string, letter: string): number {
    let count: number = 0;

    for(let i: number = 0; i < text.length ; i++){
        if(text[i] == letter){
            count++;
        }
    }

    return count;
}

// console.log(countLetter("xin chao cac ban","n"));

function nguyenTo(num: number): boolean {
    if(num < 0)
        return false;
    if(num <= 2)
        return true;
    for(let i: number = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(nguyenTo(9));








