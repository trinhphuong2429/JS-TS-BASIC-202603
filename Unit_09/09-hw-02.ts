// Union type: học viên chỉ thuộc 1 trong 4 mức xếp loại
type XepLoai = "Gioi" | "Kha" | "TrungBinh" | "Yeu";

// interface mô tả 1 học viên
interface HocVien {
  readonly id: number; // không cho phép sửa sau khi tạo
  hoTen: string;
  diem: number[]; // điểm các môn
  email?: string; // optional: có thể không có
}

const danhSach: HocVien[] = [
  { id: 1, hoTen: "  nguyễn văn an ", diem: [8, 9, 7], email: "an@neko.vn" },
  { id: 2, hoTen: "Trần thị Bình", diem: [5, 6, 6] },
  { id: 3, hoTen: "LÊ VĂN CƯỜNG", diem: [3, 4, 5], email: "cuong@neko.vn" },
  { id: 4, hoTen: "Phạm Thị Dung", diem: [10, 9, 10] },
];

function chuanHoaTen(ten: string): string {
    const  tenClean = ten.trim().split(" ").map(danhSach => danhSach.charAt(0).toUpperCase() + danhSach.slice(1).toLowerCase()).join(" ")
    return tenClean
}

function diemTrungBinh(hv: HocVien): number {
    let tong = 0;
    let dtb = 0;
    for (let diem of hv.diem){
        tong += diem
        dtb = tong / hv.diem.length;
    }
    return Number(dtb.toFixed(1))
}

function xepLoai(diemTB: number): XepLoai {
    if (diemTB >= 8.5){
        return "Gioi"
    }else if (diemTB >= 6.5){
        return  "Kha"
    }else if (diemTB >= 5){
        return "TrungBinh"
    }else{
        return "Yeu"
    }
}

function timTheoEmail(email: string): HocVien | undefined{
    const emailClean = email.trim().toLowerCase()
    return danhSach.find(danhSach=> danhSach.email?.trim().toLowerCase() ===  emailClean)
}

function inBangDiem(): void{
    for (let hocVien of danhSach){
    const ten = chuanHoaTen(hocVien.hoTen)
    const diem = diemTrungBinh(hocVien)
    const loai = xepLoai(diem)
    
    console.log(`${ten} - TB ${diem} - ${loai}`);
    }
}
console.log(chuanHoaTen("  nguyễn văn an ")); // Nguyễn Văn An
console.log(chuanHoaTen("LÊ VĂN CƯỜNG")); // Lê Văn Cường

console.log(diemTrungBinh(danhSach[1])); // 5.7

console.log(xepLoai(8)); // Kha
console.log(xepLoai(4)); // Yeu

console.log(timTheoEmail("  AN@neko.vn ")?.id); // 1
console.log(timTheoEmail("khong@co.vn")); // undefined

inBangDiem();
// Nguyễn Văn An - TB: 8 - Khá
// Trần Thị Bình - TB: 5.7 - Trung bình
// Lê Văn Cường - TB: 4 - Yếu
// Phạm Thị Dung - TB: 9.7 - Giỏi