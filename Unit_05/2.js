// Khi chạy automation test, ta nhận được một danh sách kết quả như sau:
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
    "  ERROR ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];

// Bài toán
// Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// Yêu cầu
// - Dùng destructuring để bóc tách từng phần tử trong mảng.
// - Gợi ý:
//   const [rawTestName, { browser, env }, rawStatus] = item
// - Tương ứng:
//   + rawTestName: tên test thô
//   + { browser, env }: thông tin môi trường chạy
//   + rawStatus: trạng thái test thô

// Rule xử lý
// - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// - Nếu dữ liệu hợp lệ:
//   + Tạo chuỗi theo định dạng: testName - browser - env
//   + Ví dụ: login smoke - chromium - staging
//   + Nếu PASS thì đưa vào mảng passed.
//   + Nếu FAIL thì đưa vào mảng failed.

// Kết quả mong đợi
// Hàm cần trả về dữ liệu theo dạng:
// return {
//   totalValid:3 ,
//   invalid: 1,
//   passed: [
//     "login smoke - chromium - staging",
//     "search product - webkit - staging"
//   ],
//   failed: [
//     "checkout payment - firefox - prod"
//   ]
// }

function taoBaoCaoTest(testRuns) {

let result = {
    totalValid: 0,
    invalid: 0,
    passed: [],
    failed: []
};

let i = 1 ;
//let testRunsAfterDest = [ ];
for (let testRun of testRuns ){ //=> 1. thực hiện vòng lặp

    const [action, {browser, env}, status] = testRun; //=> Destruction 

    let actionClean = action.trim();   //=> làm sạch dữ liệu
    let actionBrowser = browser.trim();
    let actionEnv = env.trim();
    let actionStatus = status.trim();
    

    // check action rỗng
    if(actionClean === ""){
        console.log(`Hành động thứ ${i} ko thực hiện => RỖNG`);
        result.invalid++;
        i++;
        continue;
   
    }
    // check status 
    if(actionStatus !== "PASS" && actionStatus !== "FAIL" ){
        console.log(`Trạng thái thứ ${i} ko hợp lệ`);
        result.invalid++;
        i++;
        continue;
    }
    // in ra định dạng theo yêu cầu bài toán
    let finished = `${actionClean} - ${actionBrowser} - ${actionEnv}`
    if(actionStatus !== "PASS"){
        result.failed.push(finished)
    }else{
        result.passed.push(finished)
    }

    i++;
    result.totalValid++;
    // testRunsAfterDest.push({action: actionClean, // in ra màn hình dưới dạng object
    //                         browser: actionBrowser,
    //                         env: actionEnv,
    //                         status: actionStatus});

    // testRunsAfterDest.push([actionClean,    // in ra màn hình dưới dạng mảng
    //                         actionBrowser,
    //                         actionEnv,
    //                         actionStatus]);

    
}


//console.log(testRunsAfterDest);
return(result);
}

let report = taoBaoCaoTest(testRuns);
console.log(report);


