// Hàm này nhận thông tin đăng nhập từ bên ngoài qua tham số.
// Có thể hiểu tham số như "chỗ chờ sẵn" để nhận dữ liệu khi gọi hàm.
/**
 * Thực hiện mô phỏng thao tác đăng nhập.
 * @param taiKhoan Tên tài khoản được truyền vào khi gọi hàm.
 * @param matKhau Mật khẩu được truyền vào khi gọi hàm.
 */
function dangNhap(taiKhoan, matKhau) {
  // In ra tài khoản đang dùng để đăng nhập.
  console.log(`Đăng nhập user: ${taiKhoan}`);
  // In ra mật khẩu đang dùng để đăng nhập.
  console.log(`Đăng nhập password: ${matKhau}`);
  // Mô phỏng thao tác bấm nút đăng nhập.
  console.log("Click nút login");
}

// In ra tên test case đầu tiên.
console.log("TC01");

// Gọi hàm và truyền dữ liệu thật vào, dữ liệu này gọi là đối số.
dangNhap("adminNeko", "abc");

// In ra tên test case thứ hai.
console.log("TC02");

// Gọi lại hàm với bộ dữ liệu khác.
dangNhap("adminNeko2", "abc2");

/**
 * Tính tổng của hai giá trị.
 * @param a Giá trị thứ nhất.
 * @param b Giá trị thứ hai.
 * @returns Kết quả sau khi cộng a và b.
 */
function tinhTongTien(a, b) {
  // Lưu kết quả phép cộng vào biến result.
  const result = a + b;
  // In kết quả ra màn hình.
  console.log(result);
  // Trả kết quả ra bên ngoài hàm.
  return result;
}

// Gọi hàm, nhận giá trị trả về và gán vào biến tienThanhToan.
let tienThanhToan = tinhTongTien(100, 2);

// In lại giá trị đã nhận được từ hàm.
console.log(tienThanhToan);

// Bên trong function:
// return result -> trả giá trị ra bên ngoài -> tienThanhToan =

/**
 * Trả về một con số may mắn cố định.
 * @returns Số 8.
 */
function laySoMayMan() {
  // Trả về giá trị 8 cho nơi gọi hàm.
  return 8;
}

// Lưu giá trị trả về của hàm vào biến ketQua.
let ketQua = laySoMayMan();

/**
 * Trả về tên hiển thị cố định.
 * @returns Chuỗi "neko".
 */
function layTenHienThi() {
  // Trả về tên hiển thị.
  return "neko";
}

// Lưu tên hiển thị nhận được từ hàm.
let tenHienThiUi = layTenHienThi();

/**
 * Kiểm tra một người có phải người trưởng thành hay không.
 * @param tuoi Tuổi cần kiểm tra.
 * @returns Kết quả đúng hoặc sai dựa trên điều kiện tuổi >= 18.
 */
function laAdult(tuoi) {
  // Nếu tuổi từ 18 trở lên thì trả về true, ngược lại trả về false.
  return tuoi >= 18;
}

// Kiểm tra với tuổi 20.
console.log(laAdult(20));

// Kiểm tra với tuổi 6.
console.log(laAdult(6));

/**
 * Minh họa cách return làm hàm kết thúc ngay lập tức.
 * @returns Chuỗi "Xong".
 */
function demoReturn() {
  // In ra thông báo bắt đầu chạy hàm.
  console.log("Bat dau");
  // Trả kết quả và kết thúc hàm tại đây.
  return "Xong";
  // Dòng này sẽ không được chạy vì hàm đã return trước đó.
  console.log("Dong nay se khong chay");
}

// Gọi hàm và in ra giá trị trả về.
console.log(demoReturn());

// Bài toán
// Viết 1 hàm tên là cleanPrice(rawString).
//
// Yêu cầu
// - Hàm này nhận vào 1 chuỗi giá tiền lấy từ UI.
// - Ví dụ: " Giá: 25.000.000 VND  ".
// - Hàm phải tự động dọn dẹp chuỗi và return về 1 số nguyên kiểu number.
// - Ví dụ kết quả mong muốn là: 25000000.
// - Nếu đầu vào là falsy thì trả về 0 luôn cho an toàn.
//
// Test case
// sp1 = "  Giá: 1.500.000 VND  ";
// sp2 = "   250.000 VND";
// sp3 = "";
//
// Kết quả mong đợi
// 15000000
// 250000
// 0
xinChao();

// Tạo hàm sau
function xinChao() {
  console.log("Hoisting");
}

// Hoisting: function declaration
// let loginStatus = checkLoginStatus();
// console.log(loginStatus);

// function checkLoginStatus() {
//   return true;
// }

const checkLoginStatus = function () {
  return true;
};

const loginStatus = checkLoginStatus();

console.log(loginStatus);

function tinh(a, b) {
  return a + b;
}

function tinh(a, b) {
  return a * b;
}

console.log(tinh(2, 3));

// const tinh2 = function (a, b) {
//   return a + b;
// };

// const tinh2 = function (a, b) {
//   return a * b;
// };

const utils = {
  // Hàm làm sạch chuỗi: bỏ khoảng trắng đầu/cuối và chuyển về chữ thường.
  lamSach: function (text) {
    return text.trim().toLowerCase();
  },
};

console.log(utils.lamSach("  HELLLO  "));

const moiTruong = "staging";

const layUrl =
  moiTruong === "staging"
    ? () => "https://staging.neko.vn"
    : () => "https://neko.vn";

console.log(layUrl());

///
// Viết theo kiểu function expression (cũ).

const tinhTongExpression = function (a, b) {
  return a + b;
};

// Chuyển sang arrow function.

const tinhTongArrow = (a, b) => a + b;

// Rút gọn hơn nữa.

const tinhTongSieuNgan = (a, b) => a + b;

// Cách sử dụng thực tế.
// Câu hỏi là: khi nào dùng loại nào?
// Viết method bên trong object.

const sanPham = {
  ten: "iPhone 17",
  gia: 2000000,

  // Cách 1: Function expression kiểu cổ điển

  hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  // Cách 2: viết hàm bằng method shorthand -> nên dùng.

  hienThiShorthand() {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  // Cách 3: Không sử dụng arrow function khi viết method trong object
  hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
  },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

// Method nằm trong object, thường dùng để biểu diễn hành vi.
// Ví dụ: một object có cả data lẫn hành vi. Chẳng hạn, object cart có dữ liệu item
// và method getSummary() để tự mô tả chính nó.
const phoneCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

const pcCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

// Object config: ví dụ một object chứa cấu hình như timeout, baseUrl và có method buildUrl() để ghép thành link hoàn chỉnh
// Object formatter: có các method như formatPrice(), formatDate() -> là object tiện ích

// Ví dụ: nếu chỉ có 1 object cụ thể, viết nhanh để dùng ngay thì đặt method bên trong object là hợp lý (trong automation test, kiểu này thường dùng ít).
// Nhưng nếu có nhiều object cùng một form như cart1, cart2, cart3 thì dùng class sẽ dễ tổ chức hơn.

// B. Truyền hàm làm callback.
// -> Callback là truyền một hàm vào nơi khác để hàm đó được gọi sau.
// -> Arrow function là lựa chọn ưu tiên hàng đầu.

const giaSanPham = [15000, 20000, 40000];

// Declaration
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);

// Expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

// Sự thật là ở rất nhiều codebase, arrow function gần như thay thế hoàn toàn function expression.
// Cả hai đều thường được gán vào const và đều không có hoisting, nhưng arrow function ngắn gọn hơn nhiều.
// Function expression chỉ còn xuất hiện trong một số trường hợp đặc biệt.
// Ở code cũ, trước khi arrow function ra đời, người ta dùng function expression nhiều hơn.
// Kết luận: với code mới, chỉ cần nhớ 2 loại chính là function declaration và arrow function.

// Nếu khai báo 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm khai báo trước.
// function guiThongBao(message) {
//   console.log(`${message}`);
// }

// function guiThongBao(message, userId) {
//   console.log(`${message}, ${userId}`);
// }

// guiThongBao("Deploy xong");

// guiThongBao("Deploy xong", 101);

function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(message);
    return;
  }

  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  console.log("target không hợp lệ");
}

guiThongBao("deploy xong");

guiThongBao("Deploy xong", 101);

guiThongBao("Deploy xong", "101");

// Đây là cùng một cách viết hàm, nhưng có nhiều cách gọi khác nhau.
// return ở đây giống như:
// "Xử lý xong trường hợp này rồi -> thoát hàm luôn."

function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }

    console.log(arr[i]);
  }

  console.log("Đã xong");
}

// break ở đây chỉ dừng vòng lặp for, không kết thúc function ngay.

/**
 * Duyệt qua mảng và dừng ngay khi gặp số 5.
 * @param arr Mảng số cần duyệt.
 */
function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Nếu gặp số 5 thì kết thúc luôn cả hàm.
    if (arr[i] === 5) {
      return;
    }

    // In ra phần tử hiện tại khi chưa gặp số 5.
    console.log(arr[i]);
  }

  // Chỉ chạy nếu vòng lặp kết thúc bình thường.
  console.log("Đã xong");
}

timSo([1, 2, 3, 4, 5, 6, 7]);
timSo2([1, 2, 3, 4, 5, 6, 7]);

/**
 * Thực hiện mô phỏng thao tác đăng nhập theo môi trường.
 * @param taiKhoan Tên tài khoản dùng để đăng nhập.
 * @param matKhau Mật khẩu dùng để đăng nhập.
 * @param moiTruong Môi trường chạy test, mặc định là "staging".
 */
function dangNhap(taiKhoan, matKhau, moiTruong = "staging") {
  console.log(`${moiTruong} - Đăng nhập: ${taiKhoan} - ${matKhau}`);
}

dangNhap("admin", "123456");

dangNhap("admin", "1234567", "dev");

function taoTestUser(ten, email, tuoi = 25, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko", "neko@vn.com");

taoTestUser("neko2", undefined, "neko2@vn.com");

// Rest parameters
function tongTien(...danhSachGia) {
  // danhSachGia là một mảng
  let tong = 0;
  // [1000, 2000, 3000, 4000]
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));

// Hàm nhận vào duy nhất 1 object là options
// Cách 1
function taoUser(options) {
  // Bóc tách (destructuring) object ra thành từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
// Cách 2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

// Gọi hàm
taoUser({
  ten: "neko",
  email: "neko@vn.com",
});

taoUser2({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});

const danhSach = ["admin", "123456", "staging"];

// Gán phần tử đầu tiên trong danh sách vào biến user.

// const matKhau = danhSach[1];

// Destructuring
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

// Bỏ qua phần tử không cần
const [firstName, , city] = ["neko", 25, "hanoi"];

console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

// Giá trị mặc định.
console.log(c);

// Destructuring object
// Đây là cú pháp rất hay gặp, dùng để bóc tách thuộc tính từ object
// ra thành các biến riêng dựa trên tên thuộc tính.
// Khác với array destructuring, object destructuring không phụ thuộc vào thứ tự.

// Ví dụ đầy đủ:
// const response = { status: 200, body: "ok", headers: {} };
// const status = response.status;

// Lấy trực tiếp thuộc tính status và body từ object.
const { status, body } = { status: 200, body: "ok" };

// In ra giá trị của từng biến vừa destructuring.
console.log(status);
console.log(body);

// Đổi tên biến khi destructuring.

// Lấy status nhưng lưu vào biến statusCode,
// lấy body nhưng lưu vào biến noiDung.
const { status: statusCode, body: noiDung } = {
  status: 200,
  body: "ok",
  headers: {},
};

// In ra các biến đã được đổi tên.
console.log(statusCode);

console.log(noiDung);

// Giá trị mặc định kết hợp với đổi tên biến.

// Lấy ten trực tiếp.
// Nếu object không có tuoi thì mặc định là 18.
// Lấy vaiTro và đổi tên thành role, nếu không có thì mặc định là "viewer".
const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko" };

// In ra kết quả sau khi destructuring.
console.log(ten);
console.log(tuoi);
console.log(role);

// Destructuring ngay trong tham số hàm.
/**
 * Hiển thị thông tin người dùng từ object truyền vào.
 * @param {object} param0 Object chứa thông tin người dùng.
 * @param {string} param0.ten Tên người dùng.
 * @param {string} param0.email Email người dùng.
 * @param {number} [param0.tuoi=18] Tuổi người dùng, mặc định là 18.
 */
function hienThiUser({ ten, email, tuoi = 18 }) {
  // Ghép các giá trị thành chuỗi rồi in ra màn hình.
  console.log(`${ten}, ${email}, ${tuoi}`);
}

// Gọi hàm với object, thiếu tuoi nên sẽ dùng giá trị mặc định.
hienThiUser({ ten: "Neko", email: "a" });

// Ví dụ tương đương khi tách object ra ngoài:
// const { ten: ten2, email, tuoi: tuoi2 = 18 } = {
//   ten: "Neko",
//   email: "a",
// };

// Destructuring lồng nhau (nested destructuring).
// Object này có nhiều cấp lồng nhau trong thuộc tính data.
const apiResponse = {
  data: {
    user: { name: "neko", email: "neko@123" },
    token: "123",
  },
  status: 200,
};

// const {
//   data: {
//     user: { name, email },
//     token,
//   },
//   status: status2,
// } = apiResponse;

// console.log(name);
// console.log(token);
// console.log(status2);
// // // Ví dụ dữ liệu đầu vào
// // Khi chạy automation test, ta nhận được một danh sách kết quả như sau:
const testRuns = [
  [
    " login smoke ",
    { browser: "   chromium   ", env: "  staging  " },
    "  PASS ",
  ],
  [
    " checkout payment ",
    { browser: "   firefox   ", env: "  prod  " },
    "  FAIL ",
  ],
  [
    " search product ",
    { browser: "   webkit   ", env: "  staging  " },
    "  PASS ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];

// // Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô

// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // return {
// //   totalValid:3 ,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging",
// //     "search product - webkit - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }
function taoBaoCaoTest(testRuns) {
  //khai báo các biến cần sử dụng
  const passed = [];
  const failed = [];
  let invalid = 0;
  for (const item of testRuns) {
    const [rawTestName, { browser, env }, rawStatus] = item;
    const testName = rawTestName.trim();
    const browserName = browser.trim();
    const envName = env.trim();
    const status = rawStatus.trim().toUpperCase();
    if (testName === "") {
      invalid++;
      continue;
    }
    if (status !== "PASS" && status !== "FAIL") {
      invalid++;
      continue;
    }
    const reportItem = `${testName} - ${browserName} - ${envName}`;
    if (status === "PASS") {
      passed.push(reportItem);
    } else {
      failed.push(reportItem);
    }
  }
  return {
    totalValid: passed.length + failed.length,
    invalid: invalid,
    passed: passed,
    failed: failed,
  };
}

// Trace ngắn:
// 1. Khi gọi taoBaoCaoTest(testRuns), hàm tạo:
///    - passed = []
//     - failed = []
//     - invalid = 0
// 2. Hàm duyệt từng phần tử trong testRuns bằng for...of.
// 3. Mỗi item được tách thành:
//     - rawTestName
//     - browser, env
//     - rawStatus
// 4. Sau đó dữ liệu được chuẩn hóa:
//     - trim() để bỏ khoảng trắng đầu/cuối
//     - status được đổi sang chữ hoa bằng toUpperCase()
// 5. Nếu testName rỗng -> invalid tăng 1, bỏ qua phần tử đó.
// 6. Nếu status không phải "PASS" hoặc "FAIL" -> invalid tăng 1, bỏ qua.
// 7. Nếu hợp lệ, tạo chuỗi reportItem dạng:
//     "ten-test - browser - env"
// 8. Nếu status === "PASS" thì thêm vào passed, ngược lại thêm vào failed.
// 9. Kết thúc vòng lặp, hàm trả về object gồm:
//     - totalValid
//     - invalid
//     - passed
//     - failed
console.log(taoBaoCaoTest(testRuns));
Beta
0 / 0
used queries
1