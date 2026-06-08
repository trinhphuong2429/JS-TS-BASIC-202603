// VÍ DỤ 1:
// function goiAPTI(url){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Dữ liệu từ ${url}`)
//         },1000);
//     })
// }

// let danhSachUrls = ["user", "product", "order"];

// forEach không đợi promise
// danhSachUrls.forEach (async(url) => {
//     let data = await goiAPTI(url);
//     console.log(data);    
// })

// async function goiTuanTu() {
//     for(let url of danhSachUrls){
//         let data = await goiAPTI(url);
//         console.log(data);
        
//     }
//     console.log("GỌI XONG HẾT");
    
// }
// goiTuanTu();

// VÍ DỤ 2:
// function taiAnhAvatar(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Avatar đã tải xong")
//         },1000)
//     })
// }
// function layDanhSachSanPham(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Lấy danh sách sản phẩm xong")
//         },2000)
//     })
// }
// function docFileCauHinh(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Đọc xong file cấu hình")
//         },3000)
//     })
// }

// async function chuanBiSongSong(params) {
//     let start  = Date.now();
//     let [avatar,sanPham, config] =  await Promise.all([
//         taiAnhAvatar(),
//         layDanhSachSanPham(),
//         docFileCauHinh()
//     ])
//     console.log("DONE",avatar);
//     console.log("DONE",sanPham);
//     console.log("DONE",config);
    
//     let tongThoiGian = (Date.now() - start) / 1000;
//     console.log(`tổng thời gian ${tongThoiGian}`);
// }
// chuanBiSongSong();

// VÍ DỤ 3:
// function thanhCong() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("XONG")
//         },1000)
//     })
// }

// function thatBai() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject("serve lỗi")
//         },500)
//     })
// }

// async function testFail() {
//     try{
//         let ketQua = await Promise.all([
//         thanhCong(),
//         thatBai()
//         ]);
//         console.log("Không bao giờ chạy vào đây");
//     } catch(loi){
//         console.log("Promise all thất bại",loi);
        
//     }
// }
// testFail();

//// VÍ DỤ 4:
// function xoaTenAccount(tenAccount, thoiGian, xoaDuoc){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             if(xoaDuoc){
//                 resolve(`đã xoá ${tenAccount}`)
//             }else{
//                 reject(`không xoá được acoount ${tenAccount}`)

//             }
//         }, thoiGian)
//     })
// }

// async function donDepTaiKhoan() {
//     let ketQua = await Promise.allSettled([
//         xoaTenAccount("user_01",1200,true),
//         xoaTenAccount("user_02",800,false),
//         xoaTenAccount("user_03",1500,true)

//     ])
//     let baoCao = ketQua.map((item, index) => {
//         let ten = ["user_01", "user_02","user_03"][index];
//         return `${ten} : ${item.status === "fulfilled" ? "PASS" : "FAIL"}`;
//     });
//     console.log(baoCao);
    
// }
// donDepTaiKhoan();

// VÍ DỤ 5:

function goiAPI(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let thanhCong = Math.random() > 0.5;
            if(thanhCong){
                resolve({status: 200, data: "Kết quả từ " + url });
            }else{
                reject("Lỗi 500 service " + url);
            }
        },2000)
    })
}
async function layDuLieuAnToan() {
    try{
        let user = await goiAPI("api.neko.com.vn/user");
        console.log(user.data);

        let orders  = await goiAPI("api.neko.com.vn/orders");
        console.log(orders.data);
    } catch(loi){
        console.log("ĐÃ XẢY RA LỖI:",loi);
        
    } finally{
        console.log("DỌN DẸP TÀI NGUYÊN");
        
    }
    
}
layDuLieuAnToan();