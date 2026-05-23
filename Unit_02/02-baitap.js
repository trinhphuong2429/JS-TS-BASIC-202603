/*Câu hỏi 1: một tại sao thầy lại sử dụng nháy dup thầy nhỉ?
Ví dụ: let giaGoc = ""Price: 30,000,000 vnđ"";

Câu hỏi 2: bài này em hơi lười em chỉ dùng mỗi method substring, vẫn nên sử dụng đa dạng method đúng ko thầy.

Câu hỏi 3: Thầy ơi, em đã hoàn thành bài tập về nhà buổi 2, thầy có thể giúp em nhận xét về cách em viết code được không ạ:
 - Code của em đã hợp lý và dễ đọc chưa?
 - Những điểm em làm tốt và những điểm em cần cải thiện.
 - Cách đặt tên biến và tổ chức code*/

/* BÀI TẬP 1
"Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.
Dữ liệu đầu vào:
Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
Yêu cầu: Viết code để:
Làm sạch và chuyển đổi Giá gốc về Number.
Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."*/


let rawPrice = " 1.000.000 đ ";
let trimmedPrice = rawPrice.trim();  // làm sach khoảng trắng 2 đầu
let partPrice  = trimmedPrice.substring(0,9); // cắt đoạn muốn lấy
let formattedPrice = partPrice.replaceAll(".",""); // thay thế dấu "."
let onlyNumberPirce = Number(formattedPrice); // ép string -> số
let finalPrice = onlyNumberPirce*(100-20)/100;
let finalPrice1 = `Giá sau giảm: ${finalPrice}`;
console.log(finalPrice1);


/* BÀI TẬP 2
"Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."
Dữ liệu đầu vào
"let tenSanPham = ""   macbook pro m3   "";
let giaGoc = ""Price: 30,000,000 vnđ"";
let soLuong = ""Sl: 2 máy"";
let maGiamGia = ""DISCOUNT CODE: 10% OFF"";"
"Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:""

HÓA ĐƠN THANH TOÁN - ID: #0002
Sản phẩm: MACBOOK PRO M3
Đơn giá: 30000000
Số lượng: 2
Tổng tiền (Gốc): 60000000
Giảm giá: 10%
THÀNH TIỀN: 54.000.000 VNĐ*/

let id = "#0002"
let finalId = `HÓA ĐƠN THANH TOÁN - ID: ${id}`;
console.log(finalId);

let tenSanPham =  "   macbook pro m3   ";
let trimmedTenSanPham = tenSanPham.trim();
let upperTenSanPham = trimmedTenSanPham.toUpperCase();
let finalTenSanPham = `Sản phẩm: ${upperTenSanPham}`;
console.log(finalTenSanPham);

let giaGoc = "Price: 30,000,000 vnđ";
let partGiaGoc  = giaGoc.substring(7,17);
let formattedPartGiaGoc = partGiaGoc.replaceAll(",","");
let finalGiaSanPham = `Đơn giá: ${formattedPartGiaGoc}`;
console.log(finalGiaSanPham);
let onlyNumberfinalGiaSanPham = Number(formattedPartGiaGoc);

let soLuong = "Sl: 2 máy";
let partSoLuong  = soLuong.substring(4,5);
let finalSoLuong = `Số lượng: ${partSoLuong}`;
console.log(finalSoLuong);
let onlyNumberfinalSoLuong = Number(partSoLuong); 

let totalPrice = onlyNumberfinalGiaSanPham * onlyNumberfinalSoLuong ;
let finalTotalPrice = `Tổng tiền (Gốc): ${totalPrice}`;
console.log(finalTotalPrice);

let maGiamGia = "DISCOUNT CODE: 10% OFF";
let partMaGiamGia  = maGiamGia.substring(15,18);
let finalMaGiamGia = `Giảm giá: ${partMaGiamGia}`;
console.log(finalMaGiamGia);

let partMaGiamGia1  = maGiamGia.substring(15,17);
let onlyNumberFinalMaGiamGia = Number(partMaGiamGia1); 
let finalTotalPriceAfterDiscount = totalPrice - (totalPrice / 100 * onlyNumberFinalMaGiamGia) ;
let final = `THÀNH TIỀN: ${finalTotalPriceAfterDiscount} VNĐ`;
console.log(final);


        

