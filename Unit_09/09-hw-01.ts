// Union type: sản phẩm chỉ thuộc 1 trong 3 loại
type LoaiSanPham = "ao" | "quan" | "phukien";

// interface mô tả hình dạng 1 sản phẩm
interface SanPham {
  ten: string;
  gia: number; // đơn vị: đồng
  tonKho: number; // số lượng còn trong kho
  loai: LoaiSanPham;
}

const khoSanPham: SanPham[] = [
  { ten: "Áo thun Neko", gia: 150000, tonKho: 12, loai: "ao" },
  { ten: "Quần Jean", gia: 350000, tonKho: 0, loai: "quan" },
  { ten: "Mũ lưỡi trai", gia: 80000, tonKho: 5, loai: "phukien" },
  { ten: "Áo khoác dù", gia: 500000, tonKho: 3, loai: "ao" },
];

function timSanPham(ten: string): SanPham | undefined {
    const tenClean: string = ten.trim().toLowerCase()
    return khoSanPham.find( khoSanPham => khoSanPham.ten.trim().toLowerCase() === tenClean)
}
function phanLoaiGia(gia: number): string {
    let status: string = ""
    if(gia < 100000){
        status =  "Rẻ"
    }else if (gia >= 100000 && gia < 400000){
        status =  "Trung bình"
    }else{
        status =  "Đắt"
    }
    return status 
}
function tinhTrangKho(sp: SanPham): string {
    if(sp.tonKho === 0){
        return "HẾT HÀNG"
    }else{
        return `Còn ${sp.tonKho} sản phẩm`
    }
}
function tongGiaTriKho(): number {
    let total = 0;
    for (let sanPham of khoSanPham){
        total += (sanPham.gia * sanPham.tonKho)
    }
    return total
}
function inDanhSach(): void {
    for (let sanPham of khoSanPham){
        let tenMatHang = ""
        if(sanPham.loai === "ao"){
            tenMatHang = "Áo"
        }else if (sanPham.loai === "quan"){
            tenMatHang = "Quần"
        }
        else{
            tenMatHang = "Phụ kiện"
        }
    
    const mucGia = phanLoaiGia(sanPham.gia)
    const tinhTrang = tinhTrangKho(sanPham)

    console.log(`${sanPham.ten} [${tenMatHang}] - ${sanPham.gia}d - ${mucGia} - ${tinhTrang}`);
    }
}

console.log(timSanPham("  áo THUN neko ")?.ten); // Áo thun Neko
console.log(timSanPham("không có")); // undefined

console.log(phanLoaiGia(80000)); // Rẻ
console.log(phanLoaiGia(150000)); // Trung bình
console.log(phanLoaiGia(500000)); // Đắt

inDanhSach();
// Áo thun Neko [Áo] - 150000d - Trung bình - Còn 12 sản phẩm
// Quần Jean [Quần] - 350000d - Trung bình - HẾT HÀNG
// Mũ lưỡi trai [Phụ kiện] - 80000d - Rẻ - Còn 5 sản phẩm
// Áo khoác dù [Áo] - 500000d - Đắt - Còn 3 sản phẩm

console.log("Tổng giá trị kho:", tongGiaTriKho()); // Tổng giá trị kho: 3340000

// for (const sanPham of khoSanPham) {
//     console.log(sanPham.gia * sanPham.tonKho);
// }