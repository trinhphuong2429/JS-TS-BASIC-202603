let arr = ["A","B","C"];
console.log(`độ dài của mảng ${arr.length}`);
console.log(`tại vị trí 3 ${arr[3]}`);

for(let i = 0; i<= arr.length; i++){
    console.log(arr[i]);
    
}
let soLuongDon = 5;
for(let i = 1; i <= soLuongDon; i++){
    let maDonHang = `ORDER-${i}`;
    console.log(maDonHang);

}

// for(let phanTu of danhSach){
//     phanTu tự động nhận giá trị của từng phần tử trong danh sách

// } 

let fruits = ["táo", "cam", "ổi"];

for (let fruit of fruits){
    console.log(fruits);
    
}
// duyệt array đơn giản
//duyệt string

let matKhau = "Neko@123";
for (let kyTu  of matKhau){
    console.log(`Kí tự: ${kyTu}`);
    
}

let danhSachUsers = [
    {ten: "Neko", role: "admin"},
    {ten: "Neko1", role: "admin1"},
    {ten: "Neko2", role: "admin2"},
]

for( let user of danhSachUsers){
    console.log(`${user.ten} - quyền ${user.role} `);
    
}



let danhSachUrls = ["/login","/dashboard","/profile"];

for (let danhSachUrl of danhSachUrls){
    console.log(` đang kiem tra: ${danhSachUrl} `);
}



// for (let key on tenObject){
    
// }

//tenObject: object mà đang muốn duyệt

let config = {browser: "Chrome", timeout: 5000};
for (let key in config){
    console.log(`${key} - ${config[key]}`);
    
}

let products = [
    {ten:"iphone", gia: 200000},
    {ten:"iphone1", gia: 300000},
    {ten:"iphone2", gia: 300000}];

for (let product of products){
    console.log(`ten: ${product.ten} `);
    console.log(`gia: ${product.gia} `);
    console.log(`---`)
}
// break 
// continue cái này không quan tâm, bỏ qua đi

for (let i = 1; i <= 100; i++){
    if( i % 7 === 0){
        console.log(`tìm thấy ${i}`);
        break;
        
    }
}

let sanPhams = [
  { ten: "iphone", conHang: true },
  { ten: "airpods", conHang: false },
  { ten: "macbook", conHang: true },
];

for (let sanPham of sanPhams){
    if (!sanPham.conHang){
        console.log(`san phẩm đầu tiên hết hàng là ${sanPham.ten}`);
        break;
        
    }
}

for (let sanPham of sanPhams){
    if (sanPham.conHang){
        console.log(`san phẩm còn trong kho là ${sanPham.ten}`);
        continue;
        
    }
    console.log("hết hàng");
    
}

//Function: Tư duy nớ như 1 cái  máy xay sinh tố
//
let sp1 =  "  giá 1.500.000   "
function cleanPrice(rawString){
    let cleanNumber = rawString.trim().replace("giá","")
    return cleanNumber;
     
}
console.log(cleanPrice(sp1));
 
 


