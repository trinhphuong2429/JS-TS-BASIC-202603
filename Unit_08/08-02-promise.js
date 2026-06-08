// VÍ DỤ 1:
// function traVeDuLieu(kieu){
//   return new Promise((resolve, reject) => {
//     if (kieu === "string"){
//       resolve("Đăng nhập thành công");
//     }else if (kieu === "number"){
//       resolve("200");
//     }else if (kieu === "bolean"){
//       return true;
//     }else if (kieu === "object"){
//       resolve({
//       maDon : "123_A",
//       sanPham : "matcha",
//       tongTien : "40000",
//     });
//     }else if (kieu === "array"){
//       resolve (["sản phẩm A"]);
//     } else if (kieu === "fuction"){
//       resolve (() => {
//         return "tôi là function được resolve";
//       });
//     }else{
//       reject( new Error("không hỗ trợ kiểu dữ liệu", kieu ));
//     }
//   });
// }
// traVeDuLieu("string").then((msg) => console.log("string",msg));
// traVeDuLieu("object").then((data) => console.log("object",data));
// traVeDuLieu("unknown").catch((loi) => console.log("reject", loi.message));

// VÍ DỤ 2:
// function moTranhgWeb(url){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Trang ${url} đã tải xong`)
//     }, 1000);
//   });
// }

// moTranhgWeb("neko.com")
// .then((trang) => {
//   console.log(trang);
//   return "TOKEN_BC_123";
// })
// .then((token) => {
//   console.log("Lấy TOKEN",token);
//   return {sp: "áo thun", sl: 3};
// })
// .then((gioHang) => {
//   console.log("Giỏ hàng", gioHang); 
// })
// .catch((loi) => {
//   console.log(loi); 
// });

// VÍ DỤ 3:
// function moTranhgWeb(url){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(url === 'nhapsai.com'){
//         reject("loi 404 ko tìm thấy trang")
//       }else{
//       resolve(`Trang ${url} đã tải xong`)
//       }
//     }, 1000);
//   });
// }

// moTranhgWeb("nhapsai.com")
// .then((trang) => {
//   console.log(trang);
//   return "TOKEN_BC_123";
// })
// .then((token) => {
//   console.log("Lấy TOKEN",token);
//   return {sp: "áo thun", sl: 3};
// })
// .then((gioHang) => {
//   console.log("Giỏ hàng", gioHang); 
// })
// .catch((loi) => {
//   console.log(loi); 
// });

// VÍ DỤ 4:
// fetch("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=")
// .then((response) => response.json())
// .then((data) => {
//   console.log("data",data);

//   console.log("message",data.message);
//   console.log("message",data.timestamp); 
// })  
// .catch((loi) => console.log(loi));

// VÍ DỤ 5:
// function goiEchoApi(){
//   return fetch ("https://api-neko-coffee.autoneko.com/public/test/echo?any_param=")
//   .then((response) => {
//     if(!response.ok){
//       throw new Error ("HTTP ERROR" + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     if(!data.message || !data.timestamp){
//       throw new Error ("API trả về sai rule thiếu trường");
//     }
//     return data;
//   })
// }

// goiEchoApi()
//   .then((data) => console.log("echo API trả về",data.message))
//   .catch((loi) => console.log(loi));

// Bài tập nhỏ
// viết một hàm kiemTraMatKhau(matKhau) trả về 1 Promise
// giả lập server kiểm tra mật khẩu mất 1.5s (setTimeout)
// neu matKhau là Neko@123 -> resolve với message "đăng nhập thành công"
// nếu matKhau  -> reject với message "sai mat khẩu"
// gọi hàm với 

// function kiemTraMatKhau(matKhau){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if (matKhau === "Neko@123") {
//         resolve("đăng nhập thành công");
//       } else {
//         reject(new Error("sai mat khau"));
//       }
//     }, 1500);
//   })
// }
//     kiemTraMatKhau("Neko@123")
//     .then((matKhau) => {
//       console.log(".then nhan:", matKhau);
//     });

//     kiemTraMatKhau("Neko@1234")
//     .catch((loi) => {
//       console.log(".catch nhan:", loi);
//     });

// VÍ DỤ 6
//callback hell
// console.log("Bắt đầu");

// new Promise((resolve) => {
//   resolve("OK");
// })
//   .then (() => {
//     console.log("Then ngoài");
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("lỗi promise bên trong")
//       },1000);
//     })
//     .catch((err) => {
//       console.log("catch bên trong bắt được",err);
//     })
//   })
//   .catch((err) => {
//     console.log("catch bên ngoài", err);
//   })


// console.log("kết thúc");

// VÍ DỤ 7
// console.log("Bắt đầu");

// new Promise((resolve) => {
//   resolve("OK");
// })
//   .then (() => {
//     console.log("Then 1");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("lỗi promise bên trong")
//       },1000);
//     })
//   .then(() => {
//     console.log("Then 2");
    
//   })
//   })
//   .catch((err) => {
//     console.log(`catch bên ngoài bắt được ${err} - bằng cách sử dụng return`);
//   })


// console.log("kết thúc");

// // VÍ DỤ 8
// // MỞ TRANG WEB MẤT 1S
// function moTranhgWeb(url){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "nhapsai.com"){
//         reject("loi 404: không tìm thấy trang")
//       }else{
//         resolve(`Trang ${url} đã tải xong`)
//       }
//       },1000);
//     });
// }
// // ĐĂNG NHẬP CẦN KẾT QUẢ TỪ BƯỚC 1  
// function dangNhap(trangWeb, user , pass){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pass === "sai mat khau"){
//         reject("SAI MẬT KHẨU")
//       }else{
//         resolve(`TOKEN ${user.toUpperCase()} _ ${Date.now()}`);
//       }
//       },1000);
//     })
// }
// // THÊM VÀO GIỎ HÀNG
// function themVaoGioHang(token, sanPham){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({token:token, sanPham: sanPham, soLuong: 2});
//     },1000);
//   })
// }
// // THANH TOÁN
// function thanhToan(gioHang){
//   return new Promise ((resolve) => {
//     setTimeout(() => {
//       resolve(`HOÁ ĐƠN ${gioHang.sanPham} ${gioHang.soLuong} `);
//     },1000)
//   })
// }

// console.log("BẮT ĐẦU KỊCH BẢN TEST");

// moTranhgWeb("neko.com")
// .then((trangWeb) => {
//   console.log("1",trangWeb);
//   dangNhap(trangWeb,"admin","123_@")
//   .then((token) => {
//     console.log("2",token);
//     themVaoGioHang(token, "trà sữa")
//     .then((gioHang) => {
//       console.log("3",gioHang);
//       thanhToan(gioHang)
//       .then((hoaDon) => {
//         console.log("4",hoaDon);
//       })
//       .catch((e) => {
//         console.log("lỗi thanh toán");
//       });
//     })
//     .catch((e) => {
//         console.log("lỗi giỏ hàng");
//     });
//   })
//   .catch((e) => {
//     console.log("lỗi đăng nhập");  
//   });
// })
// .catch((e) => {
//   console.log("lỗi mở web"); 
// });

// VÍ DỤ 9
// function hamThuong() {
//   return "xin chào";
// }
// console.log(hamThuong());

// async function hamAsync() {
//   return "xin chào";
// }
// console.log(hamAsync());

// hamAsync().then((ketQua) => {
//   console.log("nhận được", ketQua);
// })

// VÍ DỤ 10
// function goiAPI(url){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve ({status: 200, data: `Kết quả từ ${url}`})
//     },2000);
//   })
// }

// // async/ await ( PHẢI NHỚ AWAIT PHẢI ĐƯỢC KHAI BÁO TRONG ASYNC)
// async function layDuLieu() {
//   console.log("đang gọi API");

// // await 
// // tạm đừng hàm layDuLieu tại dòng này
// // chờ 2s để gọi API resolve
// // lấy giá trị gắn vào biến
// let ketQua = await goiAPI("neko.com");
// console.log("đã nhận", ketQua);
// }
// layDuLieu();

// VÍ DỤ 11 (08)
// MỞ TRANG WEB MẤT 1S
function moTranhgWeb(url){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "nhapsai.com"){
        reject("loi 404: không tìm thấy trang")
      }else{
        resolve(`Trang ${url} đã tải xong`)
      }
      },1000);
    });
}
// ĐĂNG NHẬP CẦN KẾT QUẢ TỪ BƯỚC 1  
function dangNhap(trangWeb, user , pass){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pass === "sai mat khau"){
        reject("SAI MẬT KHẨU")
      }else{
        resolve(`TOKEN ${user.toUpperCase()} _ ${Date.now()}`);
      }
      },1000);
    })
}
// THÊM VÀO GIỎ HÀNG
function themVaoGioHang(token, sanPham){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({token:token, sanPham: sanPham, soLuong: 2});
    },1000);
  })
}
// THANH TOÁN
function thanhToan(gioHang){
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(`HOÁ ĐƠN ${gioHang.sanPham} ${gioHang.soLuong} `);
    },1000)
  })
}

async function runTest() {
console.log("BẮT ĐẦU KỊCH BẢN TEST");

let trangWeb = await moTranhgWeb("neko.com");
console.log("1", trangWeb);

let token = await dangNhap(trangWeb,"admin","saimatkhau");
console.log("2", token);

let gioHang = await themVaoGioHang(token, "trà sữa");
console.log("3", gioHang);

let hoaDon = await thanhToan(gioHang);
console.log("4", hoaDon);
}
runTest();





