# WEB502_SP25

### Props

- React Element
  + Sử dụng props giống như attribute của thẻ HTML
  + Lưu ý 2 attribute: `class` -> `className` và `for` -> `htmlFor`

- React Component
  + Sử dụng props giống đối số trong component
  + Tự do đặt tên

- Chú ý
  + Props "key" là Props đặc biệt
  + Props có thể làPbất cứ kiểu dữ liệu gì
  + Có thể sử dụng destructuring

## Cài đặt project
- Mở terminal
- Chạy câu lệnh `npm create vite@latest`
- Nhập tên `project-name`
- Chọn `React`
- Chọn `Typescript + SWC`
- Chạy `cd project-name`
- Chạy `npm i` cài đặt các thư viện được khai báo trong package.json
- Chạy `npm run dev`

- Cách 2 : `npm create vite@latest project-name -- --template react-swc-ts,`

- Tìm hiểu về 1 số rule trong eslint
- Hỗ trợ thông báo lỗi cài đặt extension: eslint hoặc `npm run lint`
- Có thể tùy chỉnh rule trong eslint.config.js
```
  "no-unused-vars": ["error"], /* Khai báo biến nhưng không dùng */
  "no-console": ["off"], /* Không sử dụng console */
  "no-debugger": ["off"], /* Không sử dụng debugger */
  "no-trailing-spaces": ["off"], /* Xóa các khoảng trắng không cần thiết ở cuối mỗi dòng */
  "no-multiple-empty-lines": ["off", { "max": 1 }], /** Không được xuống dòng 2 lần */
  "semi": ["off", "never"], /* Không bắt buộc đấu chấm phẩy */
  "eol-last": ["error", "always"], /* Bắt buộc phải có 1 dòng cuối file */
  /* "quotes": ["error", "backtick"],*/ /* Cho phép sử dụng dấu nháy đơn hay nháy kép hay `` */
  "indent": ["error", 2], /* Quy định về thụt lề */
  "brace-style": ["error", "1tbs"], /* Sử dụng dấu ngoặc trên cùng 1 dòng; stroustrup: sử dụng dấu ngoặc ở dòng mới */
  "@typescript-eslint/no-explicit-any": "off", /**Cho phép sử dụng any hay không */

```

## interface

```
    interface IPerson {
        readonly id: number
        name: string
        age: number
        gender?: boolean
    }

```

## Class

```
    class Person {
        name: string
        age: number

        contructor(name: string, age: number){
            this.name = name;
            this.age = age
        }

        show(): string{
            return `Name: ${this.name}, age: ${this.age}`
        }
    }
```

```
    Modifier	Truy cập bên trong class	Truy cập từ lớp con	Truy cập từ bên ngoài class
    public	                ✅	                        ✅	                ✅
    protected	            ✅	                        ✅	                ❌
    private	                ✅	                        ❌	                ❌
```

## Một số kiểu dữ liệu thường dùng

### string
- Ví dụ:
```
    let myName: string = 'chinhpd5'
    let myHome: string = 'Hà Nội';
    let greeting: string = `Chào mừng bạn ${myName}`
```
- Sử dụng khi biến có kiểu dữ liệu là chuỗi

### number
- Ví dụ:
```
    let myAge: number = 20;
    let price: number = 1.222;
```
- Sử dụng khi biến có kiểu dữ liệu là số

### boolean
```
    let myGender: boolean = true;
```
- Sử dụng khi biến có giá trị là `true` hoặc `false`

### array
```
    let myArray: string[] = ['Nam','Cường','Bắc'];
    let myArray2: Array<number> = [3,1.5,0,-2,40]
```

### Object
```
    let myInfo: {
        name: string,
        age: number,
        gender?: boolean
    } = {
        name: 'chinhpd5',
        age: 20,
        //gender: false
    }
```
### Type Alias - Kiểu dữ liệu tùy chỉnh
```
    type Info = {
        name: string,
        age: number,
        gender?: boolean
    }

    let myInfo: Info = {
        name: 'chinhpd5',
        age: 20,
        //gender: false
    }

```

### Tuple
- Cố định kiểu dữ liệu và số phần tử các phần tử trong mảng
```
    let myTuple: [number,string,boolean] = [1,"chinhpd5",true];
```

### Union
- Cho phép một biến hoặc một thuộc tính có thể thuộc một trong nhiều kiểu dữ liệu khác nhau (|)
```
    let myUnion: string|number|boolean = 'chinhpd5';
    let myUnionArray: (string|number)[] = ['chinhpd5',20];
    funtion myUnionFun(myVar: number|string):void {};
```

### enum
```
    enum Role {
        Admin,
        Memmber,
        User
    }
```

### any

### unknow

### Generic 
```
  function identity<T>(value: T): T {
      return value;
  }
```

## Cài đặt NodeJS và TypeScript
- Link cài đặt: https://nodejs.org/en/download
- Kiểm tra node version: Mở Command Prompt (cmd) -> `node -v` hoặc `node --version`

- Cài đặt typescript: Mở Command Prompt (cmd) -> `npm i -g typescript`
- Kiểm tra typescript version: Mở Command Prompt (cmd) -> `tsc -v` hoặc `tsc --version`

- Nếu lỗi: Mở Window PowerShell bằng adminitrator(quyền quản trị viên) ->
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Các câu lệnh làm việc với Typescript
- Biên dịch `tsc fileName.ts`, ví dụ: `tsc index.ts`
- Khởi tạo file tsconfig.json `tsc -init`
- Tự động biên dịch `tsc fileName.ts --watch` hoặc `tsc -w`