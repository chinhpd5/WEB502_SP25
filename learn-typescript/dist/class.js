"use strict";
class Person {
    // hàm khởi tạo
    constructor(id, name, age, password, isLove) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
        this.isLove = isLove;
    }
    // phương thức
    greeting() {
        return `Xin chào ${this.name}, mật khẩu: ${this.password}`;
    }
}
class Member extends Person {
    // lấy lại các thuộc tính có sẵn
    // định nghĩa thêm những thuộc tính mới
    constructor(id, name, age, password, isLove, role) {
        super(id, name, age, password, isLove);
        this.role = role;
    }
    showLove() {
        return `${this.isLove ? "Đã có người yêu" : "Độc thân"}`;
    }
}
let chinh = new Person(4, "chinhpd5", 20, "123456", true);
let chinhNew = new Member(4, "chinhpd5", 20, "123456", true, 1);
console.log(chinhNew.showLove());
// console.log(chinh.isLove);
console.log(chinh.id); // read only: có thể đọc
// chinh.id = 5; // Không thể gán do thuộc tính id là read only
// console.log(chinh.password);// Không thể đọc hoặc ghi vì thuộc tính password là private
console.log(chinh.greeting());
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    showPrice() {
        return this.price;
    }
}
let bimbim = new Product("bim bim", 2000, 100);
/**
 * Xây dựng hệ thống quản lý sản phẩm trong một cửa hàng.

    Yêu cầu:

    1. Tạo một interface Product với các thuộc tính:

        id (number): Mã sản phẩm.
        name (string): Tên sản phẩm.
        price (number): Giá sản phẩm.
        category (string): Danh mục của sản phẩm (vd: "Điện tử", "Thực phẩm").

    2. Tạo một danh sách sản phẩm (mảng Product), nhập ít nhất 5 phần tử.

    3 .Viết một hàm filterByCategory nhận vào 2 tham số:
        Danh sách sản phẩm từ câu 1.
        Tên danh mục (string). Kết quả trả về là danh sách sản phẩm thuộc danh mục đó.

    4. Viết một hàm calculateTotalPrice tính tổng giá trị của tất cả sản phẩm trong danh sách.
    5. Viết một hàm findMinMax tìm sản phẩm có giá trị nhỏ và sản phẩm có giá trị lớn nhất.
 *
 */
/**
 * Xây dựng mô hình quản lý phương tiện giao thông với các loại phương tiện khác nhau.

    Yêu cầu:

    1.Tạo một interface Vehicle với các thuộc tính:
        name (string): Tên phương tiện.
        type (string): Loại phương tiện (vd: "Xe máy", "Ô tô", "Xe đạp").
        speed (number): Vận tốc trung bình (km/h).
    
    2.Tạo một interface MotorizedVehicle (mở rộng từ Vehicle) với thêm thuộc tính:
        fuelType (enum): Loại nhiên liệu (vd: "Xăng" hoặc "Điện").
    
    3.Viết một hàm calculateTravelTime nhận vào một đối tượng Vehicle và khoảng cách (km), trả về thời gian ước tính (giờ) để hoàn thành hành trình.

    4. Tạo một danh sách các phương tiện MotorizedVehicle, sau đó sử dụng hàm calculateTravelTime để tính thời gian di chuyển cho từng phương tiện với khoảng cách 100 km.

 */
