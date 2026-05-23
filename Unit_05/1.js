function sum(...numbers){
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // numbers = [1,2,3]
console.log(`tổng 3 số: ${sum(1, 2, 3)} `);

// Bài toán
// Cho dữ liệu đầu vào như sau:
// Cấu hình mặc định của bài tập
const configMacDinhBaiTap = {
  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
  timeout: 30000, // Thời gian chờ tối đa là 30 giây
  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
  retries: 2, // Số lần thử lại khi có lỗi
};
// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
  timeout: 10000,
  headless: false,
};
// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];
// Danh sách tag cần thêm
const tagsThem = ["  check out  ", "  smoke  ", "  regression "];
// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];
// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";
// Yêu cầu 
// Viết hàm taoCauHinhChayTest().
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.
// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.
// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.
// - Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.
// - Trả về object có dạng sau:
// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }
function taoCauHinhChayTest(){

// Khởi tạo 1 object mới
let result = {
    suiteName : " ",
    config : { },
    tags : [ ] ,
    slowestRespone : 0
};

// Ghi đè object
let configCuoi = {
    ...configMacDinhBaiTap,
    ...configGhiDe
}
// dùng spread array - nối mảng
let tagsCuoi = [...tagsMacDinh,...tagsThem];

// làm sạch tag và loại bỏ các phần tử bị trùng
let tagFinal = [];
for (let tag of tagsCuoi){
    let tagClean = tag.trim().toLowerCase();
    if(tagClean === ""){
        continue;
    }
    if(!tagFinal.includes(tagClean)){ // method include: kiểm tra phần tử giá trị phần tử tagClean đã có trong tagFinal hay chưa
        tagFinal.push(tagClean);
    }
}

// làm sạch và thay thế các khoảng trống thừa
let tenSuiteRawClean = tenSuiteRaw.trim().replace(/\s+/g, " ");
if(tenSuiteRawClean === ""){
    tenSuiteRawClean = "unknown-suite"; 
}
// tìm max
let maxTime = Math.max(...tocDoPhanHoi);
// gán vào object
result.suiteName = tenSuiteRawClean;
result.config = configCuoi;
result.tags = tagFinal;
result.slowestRespone = maxTime;

return (result);
// có thể return trực tiếp
// return {
//     suiteName : tenSuiteRawClean,
//     config : configCuoi,
//     tags : tagFinal,
//     slowestRespone : maxTime
// };

}
 let report = taoCauHinhChayTest();
 console.log(report);
 

