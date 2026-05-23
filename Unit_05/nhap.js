// const priceStr = "199.5";
// const qty = 3;
// let total = 0;      // chuyển priceStr sang số rồi nhân qty
// let display = 0;    // format 2 chữ số thập phân

//  total = Number(priceStr) * qty;
//  console.log(Number.isNaN(total));
//  display = total.toFixed(2);
//  console.log(display);

// const phone = "090-123-4567";
// let cleaned = " "   ;     // bỏ tất cả dấu "-"
// let isValid = " "   ;  // kiểm tra length === 10

// cleaned = phone.trim().replaceAll("-","");

// isValid = cleaned.length === 10;
// console.log(isValid);

// // if(isValid === 10){
// // console.log("hợp lệ");
// // } else {
// // console.log("sai định dạng");
// // }

// const email = "tester@example.com";
// const total = 99;
// const isVisible = false;
// let note; // Chưa gán giá trị nên là undefined

// console.log(typeof email);     // "string" => đây là chuỗi
// console.log(typeof total);     // "number" => đây là số
// console.log(typeof isVisible); // "boolean" => đây là true/false
// console.log(typeof note);      // "undefined" => biến chưa có giá trị

const rawSuiteName = "  CHECKOUT-Flow-End-To-End  "; 
const suiteName = rawSuiteName.trim()
                                .replaceAll("-"," ")
                                .toLowerCase();
console.log(suiteName);

const totalStr   = "  56 tests  ";
const passStr    = "  49 passed  ";
const avgTimeStr = "  1.35 s  ";   // giây

let total   = parseInt(totalStr.trim()); // 56
let pass    = parseInt(passStr.trim()) ;  // 49
let avgTime = parseFloat(avgTimeStr.trim());   // 1.35

// Kiểm tra ngay sau khi chuyển số
if (Number.isNaN(total) || Number.isNaN(pass) || Number.isNaN(avgTime)) {
  console.log("Lỗi dữ liệu đầu vào");
}else {
    console.log("Dữ liệu đều là Number");
    
}

console.log(total);
console.log(pass);
console.log(avgTime);


const fail      = total - pass;          
const passRate  = ((pass/total) * 100).toFixed(1);         
const isCheckout = suiteName.includes("checkout");       
const nameLength = suiteName.length;        

console.log(fail);
console.log(passRate);
console.log(isCheckout);
console.log(nameLength);


let status = "fail";     
if(passRate >= 90 && avgTime <= 2){
    status = "pass";
    
}else{
    status = "fail";
    
}

const statusDisplay = status.toUpperCase() ;  
const avgDisplay    = avgTime.toFixed(2) ;  

console.log(statusDisplay);
console.log(`${avgDisplay} s`);



const url = "https://www.example.com/products/laptop?ref=home";

let exam = url.substring(url.indexOf("example.com"),(url.indexOf("/products")));
console.log(exam);

let hom = url.slice(url.indexOf("/products/laptop"),(url.indexOf("?ref")));
console.log(hom);





 
