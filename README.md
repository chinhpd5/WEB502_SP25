# WEB502_SP25

## Cài đặt NodeJS và TypeScript
- Link cài đặt: https://nodejs.org/en/download
- Kiểm tra node version: Mở Command Promit (cmd) -> `node -v` hoặc `node --version`

- Cài đặt typescript: Mở Command Promit (cmd) -> `npm i -g typescript`
- Kiểm tra typescript version: Mở Command Promit (cmd) -> `tsc -v` hoặc `tsc --version`

- Nếu lỗi: Mở Window PowerShell bằng adminitrator(quyền quản trị viên) ->
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Các câu lệnh làm việc với Typescript
- Biên dịch `tsc fileName.ts`, ví dụ: `tsc index.ts`
- Khởi tạo file tsconfig.json `tsc -init`
- Tự động biên dịch `tsc fileName.ts --watch` hoặc `tsc -w`