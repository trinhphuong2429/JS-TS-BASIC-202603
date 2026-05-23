const rawSuiteName = "  CHECKOUT-Flow-End-To-   End  "; 

const totalStr   = "  56 tests  "; // 56 tests
const passStr    = "  49 passed  ";
const avgTimeStr = "  1.35 s  ";   


function clean(){
const suiteName = rawSuiteName
                            .trim()
                            .replaceAll("-"," ")
                            .replace(/\s+/g, " ")
                            .toLowerCase();

let total   = parseInt(totalStr.trim()); 
let pass    = parseInt(passStr.trim()) ;  
let avgTime = parseFloat(avgTimeStr.trim());   

// Kiểm tra ngay sau khi chuyển số
if (Number.isNaN(total) || Number.isNaN(pass) || Number.isNaN(avgTime)) {
  console.log("Lỗi dữ liệu đầu vào");
}else {
    console.log("Dữ liệu đều là Number");
    
}

if(total === 0){
    console.log("Lỗi chia 0");
    return;
    
}

const fail      = total - pass;          
const passRate  = ((pass/total) * 100).toFixed(1);         
const isCheckout = suiteName.includes("checkout");       
const nameLength = suiteName.length;        

console.log(fail);
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

console.log("================================");
console.log("BÁO CÁO TEST SUITE");
console.log("================================");
console.log(`Suite: ${suiteName}`);
console.log(`Trạng thái: ${statusDisplay}`);
console.log(`Tổng: ${total} | Pass: ${pass} | Fail: ${fail} `);
console.log(`Tỉ lệ: ${passRate} %`);
console.log(`Thời gian trung bình: ${avgDisplay} s`);

return;   
}
let result = clean();
//console.log(result);
