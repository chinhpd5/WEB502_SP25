// array
let myArray: string[] = ['Chính','Long','Bình'];
let myArray2: number[] = [1,2,3,4,5];

let myArray3: Array<boolean> = [true, false, true];

// object
let myObject: {
    name: string,
    age: number,
    gender?: boolean // có thể có hoặc không ?
}= {
    name: "chinhpd5",
    age: 20,
    gender: false
}

// type alias
type Info = {
    name: string,
    age: number,
    gender?: boolean
}

let myInfo: Info = {
    name: "chinhpd5",
    age: 20,
    gender: false
}

// Tuple
let myTuple: [number, string, boolean] = [30, "chinhpd5", true];

function hcn(a: number, b: number): [number, number]{
    return [
        (a+b)*2,
        a*b
    ]
}

let result = hcn(5,6);
// console.log(result[0]);
// console.log(result[1]);

type RGB = [number,number,number];

let black: RGB = [0,0,0]
let white: RGB = [255,255,255]

// union
let myUnion: number|string = 30;
myUnion = "chinhpd"

let myArray4: string[]|number[] = [1,2,3,4];
myArray4 = ["a","b","c"]

let myArray5: (string|number)[] = [1,"a",2, "b"];

function test(variable: string|number|boolean): string|void{}


// enum

enum Sts {
    Success = 'SUCCESS',
    Warning = 'WARNING',
    Error = 'ERROR'
}

// console.log(Sts.Success);
// console.log(Sts.Warning);
// console.log(Sts.Error);

// Generic

function getData1(array: string[]):string{
    return array[0]
}

// console.log(getData1(["a","b","c"]));

function getData2(array: number[]): number{
    return array[0]
}

function getData<T>(array: T[]): T{
    return array[0]
}

getData<string>(["a","b","c"]);
getData<number>([1,2,3,4,5]);

type Status<Data> ={
    data: Data,
    status: boolean
}

let userSts: Status<{name: string, age: number}> = {
    data: {
        name: "chinhpd5",
        age: 20
    },
    status: true
}

let postSts: Status<{title: string, prices: number, sale?: boolean}> = {
    data: {
        title: "post 1",
        prices: 20000
    },
    status: false
}

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

