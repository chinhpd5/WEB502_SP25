# WEB502_SP25

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