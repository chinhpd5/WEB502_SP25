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


