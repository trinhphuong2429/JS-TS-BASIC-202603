let loiChao = "xin chao buoi sang";
let loiChao2 = "xin chao buoi sang";
let myName = "I'm Hoang";

const tenHocVien = "Phuong";

// Dùng dấu backtick (`) để chèn biến vào giữa câu hoặc một chuỗi khác
const loiGioiThieu = `Ten toi la ${tenHocVien}`;
console.log(loiGioiThieu);

let tuoi = 30;
const PI = 3.14;
let ketQua = (tuoi - 5) * 3.14;
console.log(ketQua);

//kieu boolean
let denDangBat = true;
let chuaTotNghiep = false;

// hop do nghe xu li string

// 1 .length - dung de dem xem chuoi cos bao nhieu ki tu
let matKhau = "12345678910";
console.log(matKhau.length);

// trim - lam sach khoang trang 2 dau
let mail = "  phuong@gmail.com   ";
console.log(mail.trim());

// toUpperCase() va toLowerCase()
let tenSanpham = "inpHoNe 15"
console.log(tenSanpham.toUpperCase());

// inclused - kiem tra chuoi con co nam trong chuoi cha hay ko, tra ve TRUE, FALSE
// so sanh chinh xac tung ki tu, ke ca hoa va thuong, Error =! error
// co phan biet dau cach
let thongBao = "Dang nhap that bai. Sai mat khau";
console.log(thongBao.includes("Dang nhap"));

//replace() - xoa va sua loi, chi thay the ki tu dau tien sau khi tim thay
let giaTien = "100$";
let giaTienSo = giaTien.replace("$","");
console.log(giaTienSo);

//replaceAll() - xoa va sua loi, thay the toan bo ki tu tim dc
let tien = "1.000.000";
console.log(tien.replaceAll(".",""));

// 

let output =  "Error 404: Page not found";

console.log(output.includes("Page not found"));



let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";

let start = rawText.trim();
let end = start.indexOf("|");
//let res = end.slice() errorMsg.indexOf(":") + 2))
//console.log(errorMsg.substring(errorMsg.indexOf(":") + 2));
console.log(end);

// bai tap ve nha

// hop do nghe xu li NUMBER

//Ép kiểu
//Để tính toán bắt buộc phải chuyển về Number
//A Number()
// parseInt() - từ trái sang phải, gặp số thì lấy chữ thì bỏ, gặp thập phân bỏ thập phân
// parseFloat() - từ trái sang phải, gặp số thì lấy chữ thì bỏ, gặp thập phân giữ thập phân

let s1= "100";
console.log(Number(s1));

let s2= "100px";
console.log(Number(s2));
console.log(parseInt(s2));
console.log(parseInt(10.267));
console.log(parseFloat(10.267));

// 1 số phương thức làm việc với Nmuber
// toFixed() - 
console.log((19.953).toFixed(2));

 

//.padStart: lấp đầy chỗ trống phía trước, LÀ PHƯƠNG THỨC CỦA String, KO PHẢI Number
let ngay = 5;

//console.log(String(ngay.padStart(2,"0")));
let orderNumber = 5;
let orderNumber1 = String(orderNumber);
let orderNumber2 = orderNumber1.padStart(5,"0");
console.log(orderNumber2);
 




