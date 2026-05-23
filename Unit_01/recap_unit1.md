1. Những kiểu dữ liệu bạn gặp nhiều nhất
    string: dùng cho văn bản, ví dụ tên đăng nhập, thông báo lỗi, tiêu đề trang.
    number: dùng cho số lượng, giá tiền, thời gian chờ, điểm số.
    boolean: chỉ có true hoặc false, rất hay dùng trong điều kiện.
    undefined: biến đã khai báo nhưng chưa có giá trị.
    null: bạn chủ động gán để nói rằng hiện tại không có dữ liệu.
    object và array: dùng khi dữ liệu có cấu trúc phức tạp hơn.

2. Các thao tác chuỗi hay dùng
    trim(): bỏ khoảng trắng thừa ở đầu và cuối chuỗi.  // -> string
    includes(): kiểm tra chuỗi có chứa một đoạn text nào đó hay không. // → true/false  (boolean)
    replace() / replaceAll(): thay thế ký tự hoặc đoạn text không mong muốn. // -> string
    replace(/\D/g, ""): xoá hết các kí tự không phải là số kể cả khoảng trắng, lưu ý sai với số thập phân
    replace(/\s+/g, " "): gom nhiều khoảng trắng thành 1 khoảng trắng, tránh bị thừa khoảng trắng
    length: lấy độ dài chuỗi.  // → number
    toLowerCase() / toUpperCase(): chuẩn hóa chữ hoa, chữ thường trước khi so sánh. // -> string
    typeof() : kiểm tra kiểu dữ liệu

    **LÀM SẠCH → TÌM MỐC → CẮT/TÁCH → CHUẨN HÓA → KIỂM TRA**

3. Ép kiểu sang số trước khi tính toán
    Number(): đổi chuỗi sang số khi chuỗi đã khá “sạch”. // → number
    parseInt(): lấy phần số nguyên. // → number
    parseFloat(): lấy số thập phân. // → number
    Number.isNaN(): kiểm tra kết quả ép kiểu có bị lỗi hay không. // → true/false  (boolean)
    toFixed(): format số thập phân về số chữ số mong muốn. // -> string

    Number() phù hợp khi bạn mong đợi chuỗi phải là một con số “sạch”. 
    Còn parseInt() hoặc parseFloat() hữu ích hơn khi chuỗi vẫn còn dính thêm ký tự phía sau.