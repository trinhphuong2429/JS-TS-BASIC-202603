/*“Trong bài này, cách em xử lý vòng lặp, điều kiện, sắp xếp logic 
 đã hợp lý chưa, hay còn cách nào tối ưu hơn về mặt tư duy và code clean không ạ?”
 Thầy để lại review cho em nhé */


/*Bài 2
Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, 
nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.

Dữ liệu đầu vào:*/

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
];
/*Yêu cầu: 

Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
Nếu bình thường → in kết quả PASS.
Đếm tổng URL đã test được (không tính URL bị bỏ qua)."*/

 let i = 1; 
 let urlTested = 0;
 for ( let testUrl of testUrls){
     let valueUrl = testUrl.url;
     let valueStation = testUrl.status;
     //console.log(`[${valueUrl}]`);
     //console.log(`[${valueStation}]`);

     //let value_1 = Object.values(testUrl); lấy hết value của mỗi key
     //console.log(value_1);

     if(!valueUrl){
        console.log(`Url thứ ${i}: Rỗng, bỏ qua`);
        i++;
        continue;
        
     }
     if(valueStation === 500){
        console.log(`Url thứ ${i}: LỖI NGHIÊM TRỌNG, DỪNG KIỂM THỬ`);
        i++;
        urlTested++;
        break;
     } else{
        console.log(`Url thứ ${i}: PASS`);
        i++;
        urlTested++;
     } 
     
     
 }
console.log(`Số URL đã test: ${urlTested}` );
 