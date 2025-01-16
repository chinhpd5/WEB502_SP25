"use strict";
// array
let myArray = ['Chính', 'Long', 'Bình'];
let myArray2 = [1, 2, 3, 4, 5];
let myArray3 = [true, false, true];
// object
let myObject = {
    name: "chinhpd5",
    age: 20,
    gender: false
};
let myInfo = {
    name: "chinhpd5",
    age: 20,
    gender: false
};
// Tuple
let myTuple = [30, "chinhpd5", true];
function hcn(a, b) {
    return [
        (a + b) * 2,
        a * b
    ];
}
let result = hcn(5, 6);
let black = [0, 0, 0];
let white = [255, 255, 255];
// union
let myUnion = 30;
myUnion = "chinhpd";
let myArray4 = [1, 2, 3, 4];
myArray4 = ["a", "b", "c"];
let myArray5 = [1, "a", 2, "b"];
function test(variable) { }
// enum
var Sts;
(function (Sts) {
    Sts["Success"] = "SUCCESS";
    Sts["Warning"] = "WARNING";
    Sts["Error"] = "ERROR";
})(Sts || (Sts = {}));
// console.log(Sts.Success);
// console.log(Sts.Warning);
// console.log(Sts.Error);
// Generic
function getData1(array) {
    return array[0];
}
// console.log(getData1(["a","b","c"]));
function getData2(array) {
    return array[0];
}
function getData(array) {
    return array[0];
}
getData(["a", "b", "c"]);
getData([1, 2, 3, 4, 5]);
let userSts = {
    data: {
        name: "chinhpd5",
        age: 20
    },
    status: true
};
let postSts = {
    data: {
        title: "post 1",
        prices: 20000
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
