
interface IUser {
    readonly id: number
    email: string
    password: string
    role: boolean,
    greeting?(): string
}

interface IUser {
    name: string
}

let chinhUser: IUser = {
    id: 1,
    email: "chinhpd5@fe.edu.vn",
    password: "123456",
    role: true,
    greeting() {
        return `Xin chào ${this.email}`
    },
    name: "chinhpd5"
}
// chinhUser.id = 3;

chinhUser.email = 'chinhpd6@fe.edu.vn'

console.log(chinhUser);



type User = string|number
type User1 = string[]
type User2 = [string|number]

// type User = boolean // Không thể

type User3 = User & boolean


interface IAdmin extends IUser{
    age: number,
    description: string
}

let namAdmin: IAdmin = {
    id: 2,
    email: "admin@fe.edu.vn",
    password: "123456",
    role: false,
    name: "nam",
    age: 30,
    description: "mô tả"
}

