"use strict";
//array
let myArray = ["Chính", "Bình", "Long"];
let myNum = [1, -2, 3.5, NaN];
let myArray2 = [true, false];
//Object
let myObject = {
    name: "chinhpd5",
    age: 20,
    gender: true
};
let ChinhInfo = {
    name: "Phí Đức Chính",
    age: 23,
};
// Tuple
let myTuple = [20, "chinhpd5", true];
// ví dụ 1
function tinhToan(a, b) {
    return [(a + b) * 2, a * b];
}
let result = tinhToan(2, 3);
let black = [0, 0, 0];
let white = [255, 255, 255];
// union
let variable = "chinhpd5";
variable = 30;
let myArray3 = [1, 2, 3, 4];
myArray3 = ["a", "b", "c"];
let myArray4 = [1, "a", 2, "b", true];
function show(variable) { }
// any và unknown
let myVar;
myVar = "chinhpd5";
// myVar = 20;
// myVar = true;
// console.log(myVar.toUpperCase());
let myVar2;
myVar2 = 30;
myVar2 = "abc";
// if(typeof myVar2 == 'string')
//     console.log(myVar2.toUpperCase());
// Generic
function getData1(array) {
    return array[0];
}
// console.log(getData1([1,2,3,4,5]));
function getData2(array) {
    return array[0];
}
function getData(array) {
    return array[0];
}
getData([1, 2, 3, 4]);
getData(["a", "b", "c"]);
let UserSts = {
    data: {
        name: "chinhpd5",
        age: 20
    },
    status: true
};
let PostSts = {
    data: {
        title: "Post 1",
        price: 3000,
        sale: false
    },
    status: false
};
/**
 * Tạo type Product có các trường sau:
 * name: string
 * price: number
 * sale: boolean
 * rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
 *
 * Tạo mảng listProducts có các phần tử có kiểu Product
 * Nhập ít nhất 5 phần tử
 * Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
 * Viết hàm hiển thị danh sách sản phẩm (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
 * Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
 * Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
 *
 */
