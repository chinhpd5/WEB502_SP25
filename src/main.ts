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

if(myGender){
    console.log(`Giới tính Nam`);
}else{
    console.log(`Giới tính Nữ`);
}



