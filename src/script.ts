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
