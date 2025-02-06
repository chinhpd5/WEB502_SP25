# WEB502_SP25


## Đề Assignment Giai đoạn 1
- Hiển thị danh sách sản phẩm (Tự thiết kết giao diện - có thể sử dụng bootstrap) lấy thông tin sản phẩm trong `db.json`
  + ![alt text](image.png)
  + Thêm chức năng phân trang (8 sản phẩm trên 1 trang) - Gợi ý: `GET /products?_page=1&_per_page=25`
  + Thêm chức năng tìm kiếm - Gợi ý `GET /products?title=name product`
- Xây dựng chức năng xem chi tiết sản phẩm khi click vào sản phẩm trong danh mục
  + Lấy đúng thông tin sản phẩm được click
  + Tự thiết kế giao diện cho trang chi tiết sản phẩm

## Cài đặt bootstrap
- `npm i bootstrap`
- Thêm đoạn code sau vào `main.tsx`
```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```
- Cài đặt extension `Bootstrap IntelliSense` cho Visual Studio Code

## Cài đặt React Router
- `npm i react-router-dom`
- Thêm `<BrowserRouter></BrowserRouter>` vào `main.tsx`
```
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```
- Khai báo đường dẫn trong `App.tsx`
```
<Routes>
  <Route path="/" element={<LayoutClient/>}>
    <Route index element={<Home/>}/>
    <Route path="product" element={<Products/>}/>
    <Route path="news" element={<h1>Tin tức</h1>}/>
    <Route path="about" element={<h1>About</h1>}/>
  </Route>

  <Route path="*" element={<h1>Not found</h1>}/>
</Routes>
```

## Hooks

### useState

```
  const [state, setState]= useState<type>(initialValue)

```
- `state`: lưu trữ giá trị
- `setState`: 
  + Hàm cập nhật giá trị cho `state`
  + Khi gọi thì `coponent` render lại
  + Có thể sử dụng callback
```
  setState(newValue)

  // callback
  setState((prev)=>{ // prev: giá trị trước đó của state
    return newValue
  })
```
- `initialValue`: giá trị khởi tạo cho state khi `component` render lần đầu tiên
- `type`: khai báo kiểu dữ liệu cho `state`

### useEffect

- `useEffect(callback)`: `callback` được gọi 1 lần đầu tiên khi tải trang và mỗi lần `component` render lại

- `useEffect(callback,[])`
```
  useEffect(() => {
  // logic

  return () => {
    // clean up logic
  };
}, []);
```
+ `callback` chỉ chạy 1 lần duy nhất khi `component` được `mount`(khởi tạo vào DOM)
+ `return ()=>{}`: `Cleanup` (hàm trả về, có thể có hoặc không) sẽ chạy khi `component` bị `unmount`(xóa khỏi DOM) hoặc callback được gọi lại

- `useEffect(callback,[deps1,deps2])`
+ `callback` chạy khi bất kỳ giá trị nào trong `dependency array` ([deps1,deps2,...]) thay đổi.


### Props

- React Element
  + Sử dụng props giống như attribute của thẻ HTML
  + Lưu ý 2 attribute: `class` -> `className` và `for` -> `htmlFor`

- React Component
  + Sử dụng props giống đối số trong component
  + Tự do đặt tên

- Chú ý
  + Props "key" là Props đặc biệt
  + Props có thể là bất cứ kiểu dữ liệu gì
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