class HocVien {
// BƯỚC 1: KHAI BÁO TẤT CẢ THUỘC TÍNH  Ở CLASS FIELD 
hoTen = ""; // sẽ được khai báo lại trong constructor
tuoi = 0;   // sẽ được khai báo lại trong constructor
truongHoc = "Neko playwright";
trangThai = "đang học";

// BƯỚC 2: CONSTRUCTOR CHỈ GÁN LẠI CHO THUỘC TÍNH CẦN GIÁ TRỊ ĐỘNG 
    constructor(ten, tuoi){
        this.hoTen = ten;
        this.tuoi = tuoi;
    }
// phương thức (method)
gioiThieu(){
    console.log(`${this.hoTen}, ${this.tuoi}`);
    
}
}

let hv1 = new HocVien("Neko",30);
hv1.gioiThieu();
console.log(hv1.hoTen);
console.log(hv1.tuoi);
console.log(hv1.truongHoc);
console.log(hv1.trangThai);


let hv2 = new HocVien("Neko_1",31);
hv2.gioiThieu();


// cách 2 CONSTRUCTOR có giá trị mặc định (default parameters)

class Testconfig {
    //B1:
    browser = "Chromium";
    timout = 5000;
    constructor(browser = "Chromium", timout = 5000){
        this.browser = browser;
        this.timout = timout;
    }

}
let config_1 = new Testconfig();

let config_2 = new Testconfig("firefox");

let config_3 = new Testconfig("webkit","1000");

// cách 3: Constructor không tham số - dùng class field thuần
// khi mọi object đều có chung thuộc tính cố định, ko cần constructor, chỉ class field là đủ
class LoginPage{
    url = "https://nekosensei.com/login";
    txtEmail = "#email";
    btnSubmit = "button[type = submit]";
}

let trang = new LoginPage();

console.log(trang.url);
console.log(trang.txtEmail);

// Từ khoá this trong class
// TH1: This ở trong constructor => Chính là object đang được tạo 

class HocVien3 {
    hoTen = "";

    constructor(ten){
    // this = object mới đâng được lệnh new tạo ra
        this.hoTen = ten;
        console.log(this);
        
    }
}

let hv3 = new HocVien3("Neko_2");
console.log(hv3);

// TH2: This ở trong method -> object đang gọi method đó
class LoginPage2{
    url = "/login";

    moTrang(){
    // This = Object đang đứng trước dấu chấm
    console.log(`Mở trang ${this.url}`);
    
    }

}
let trang2 = new LoginPage2();
trang2.moTrang();

/*  // TH3 this bị mất khi nó nằm trong callback (hàm thường)
class DashBoard {
    tieuDe = "trang chủ";

    taiDuLieu(){
        setTimeout(function(){
            // This không còn là DashBoard nữa
            console.log(this.tieuDe);
            
        }, 1000);
    }
}

let dash = new DashBoard();
dash.taiDuLieu();*/

// dung arrow function
class GioHangDemo{
    tenCuaHang = "neko shop";
    sanPham = ["trà sữa", "cà phê"];

    inHoaDon(){
        this.sanPham.forEach((sp) => {
            console.log(`${this.tenCuaHang}: ${sp}`);
        
        });
    }
}
let gioHang1 = new GioHangDemo ();
gioHang1.inHoaDon();
// this ở arrow function -> nó mượn this ở bên ngoài (lexical this)

// tách method 
class CheckoutPage{
    url = "/checkout";

    // hàm thường
    moBangHamThuong(){
        console.log(`Mở ${this.url}`);
        
    }

    // hàm array 
    moBangArrow = () => {
        console.log(`Mở ${this.url}`);
        
}
}
let checkout1 = new CheckoutPage();
checkout1.moBangHamThuong();
checkout1.moBangArrow();

// tách method ra khỏi instance ()
let hamThuongBiTach = checkout1.moBangHamThuong; //gán nguyên hàm vào biến

let hamArrowBiTach = checkout1.moBangArrow; //gán nguyên hàm vào biến

hamArrowBiTach(); // vẫn in ra kết quả vì nó biết this nằm ở đâu (this có ngữ cảnh)
//hamThuongBiTach(); // ko in ra kết quả vì nó ko biết this nằm ở đâu (this ko có ngữ cảnh)

// BÀI TẬP NHỎ 1
// tạo một class tên là productPage cho trang sản phẩm
// với thuộc tính:

// txtTenSP = '#productName'
// txtGia = '#price'
// btnGioHang = '#btnCart'
// modalThongBao = '.notification'

// Method themSanPham(ten, gia): in ra gõ tên, gõ giá, click thêm giỏ hàng
// Method kiemTraThongBao(): in ra modal thông báo

// followMeThod thucHienThemVaKiemTra(ten, gia)

class productPage {
    
txtTenSP = '#productName'
txtGia = '#price'
btnGioHang = '#btnCart'
modalThongBao = '.notification'

    themSanPham(ten, gia) {
        console.log(`gõ tên sản phẩm vào ${this.txtTenSP}: ${ten} `);
        console.log(`gõ giá sản phẩm vào ${this.txtGia}: ${gia}`);
        console.log(`click nút thêm vào giỏ hàng ${this.btnGioHang}`);
    }

    kiemTraThongBao() {
        console.log(`hiển thị modal thông báo: ${this.modalThongBao}`);
        
    }
    thucHienThemVaKiemTra(ten, gia){
        this.themSanPham(ten, gia);
        this.kiemTraThongBao();
    }

}

let product = new productPage()
product.themSanPham("iphone 12", "$2000");
product.kiemTraThongBao();
console.log("=============");
product.thucHienThemVaKiemTra("samsung galaxy", "$1000");