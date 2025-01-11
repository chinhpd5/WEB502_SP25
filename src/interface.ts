interface IPerson {
  readonly id: number
  name: string
  age: number
  gender: boolean
}

interface IUser extends IPerson {
  email: string,
  password: string
}

type Person = {
  id: number
  name: string
  age: number
  gender: boolean
}


let chinhPerson: IPerson = {
  id: 1,
  name: "chinhpd5",
  age: 20,
  gender : true
}

// chinhPerson.id = 3
// console.log(chinhPerson.id);
chinhPerson.name = "chinhpd5 new"
console.log(chinhPerson);



let chinhUser: IUser ={
  id: 2,
  name: "chinhpd5",
  age: 20,
  gender : true,
  email: "chinhpd5@fe.edu.vn",
  password: "123456"
}

type a = number | string
type a1 = number[]
type a2 = [number|string]


interface IPoint {
  x: number
}

interface IPoint {
  y: number
}

let myPoint:IPoint = {
  x: 1,
  y: 1
}

// console.log(myPoint);

type Point ={
  x: number
}

// type Point ={
//   y: number
// }

type  newPoint = Point & {
  y: number
}

