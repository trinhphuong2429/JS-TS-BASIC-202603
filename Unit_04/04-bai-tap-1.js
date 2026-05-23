/*“Trong bài này, cách em xử lý vòng lặp, điều kiện, sắp xếp logic 
 đã hợp lý chưa, hay còn cách nào tối ưu hơn về mặt tư duy và code clean không ạ?”
 Thầy để lại review cho em nhé*/

/*"Bài 1
Tình huống: Bạn viết script test tự động kiểm tra API /users/1. 
Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.

Dữ liệu đầu vào:*/

let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

/*Yêu cầu:

Với mỗi key, kiểm tra:
Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
Nếu key là "isActive", kiểm tra typeof có phải ""boolean"" không? → In cảnh báo sai kiểu.
Đếm tổng số lỗi tìm được.
Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra."*/


    let errorCount = 0;
    for (let key in apiResponse){ // duyệt các key của object
        let value = apiResponse[key]; // lấy giá trị của mỗi key qua từng vòng lặp, lấy key động
        if(value === null || value === "" ){
            console.log(`${key}: Cảnh báo trường rỗng`);
            errorCount++;
        }
        if(key === "isActive" && typeof value !== "boolean")   {
            console.log(`Trường ${key} không phải là kiểu Boolean`);
            errorCount++;
            
        } 
    }
    console.log(`Tổng lỗi tìm được: ${errorCount}`);
    
