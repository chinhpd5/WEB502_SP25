
interface IPerson {
    readonly id: number
    name: string,
    age: number,
    gender: boolean,
    greeting(): string
}

interface IUser extends IPerson{
    role: boolean
}

// type Person ={
//     id: number
//     name: string,
//     age: number,
//     gender: boolean
// }

let chinhPerson: IPerson = {
    id: 1,
    name: "chinhpd5",
    age: 30,
    gender: true,
    greeting() {
        return `Xin chào ${this.name}`
    },
}

// console.log(chinhPerson.id);// có thể đọc
// chinhPerson.id = 2; // Không thể gán
chinhPerson.name = "chinhpd5 new"
// console.log(chinhPerson.name);


let chinhUser: IUser = {
    id: 1,
    name: "chinhpd5",
    age: 30,
    gender: true,
    greeting() {
        return `Xin chào ${this.name}`
    },
    role: true
}
// console.log(chinhPerson.greeting());

type a = number | string;
type a1 = string[];
type a2 = [string|number];

interface IPoint {
    x: number
}

interface IPoint {
    y: number
}

let myPoint: IPoint = {
    x: 1,
    y: 1,
}

// console.log(myPoint);

type Point = {
    x: number
}

type PointAthor = Point & {
    y: number
}




