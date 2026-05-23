/*- **Mảng (Array)**
  - Bản chất, nếu:

    let ten = "Hoang";
    
    thì `ten` chỉ chứa một giá trị.

  - Có thể hiểu array giống như một cái tủ đựng đồ có nhiều ngăn:
    - Chỉ có một tên chung (giống tên biến).
    - Có thể chứa nhiều món đồ bên trong.
    - Các món đồ được đặt cạnh nhau và có thứ tự.

  - Cú pháp:
    - Dùng dấu ngoặc vuông `[]`
    - Các phần tử đặt bên trong và ngăn cách nhau bằng dấu phẩy

  - Ví dụ:*/
    // Array chứa toàn string
    let danhSachUser = ["admin", "test_01", "user_vip"];

    // Array chứa toàn number
    let danhSachGia = [1000, 2000, 3000];

    // Array rỗng
    let danhSachLoi = [];

  //- **Lưu ý:** Trong nhiều ngôn ngữ khác, array thường chỉ chứa một kiểu dữ liệu. Nhưng trong JavaScript, array có thể chứa nhiều kiểu dữ liệu khác nhau.

    let thapCam = ["Neko", 30, true, null];

//     - Tuy nhiên, không nên dùng kiểu "thập cẩm" như vậy.
//     - Nên giữ dữ liệu đồng nhất để dễ xử lý.

// - **Cú pháp lấy phần tử trong mảng**
//   - Cú pháp:
    
    //tenBien[viTri];
    
  //- `index` bắt đầu từ `0`

  //- Ví dụ:
    let sanPham = ["aoThun", "quanJean"];

    console.log(sanPham[1]); // "quanJean"
    console.log(sanPham[10]); // undefined


// - **Bộ đồ nghề xử lý mảng**
//   - **A. `length`** - Đếm số lượng phần tử
//     - Cú pháp:
      
      //tenMang.length;
      
  //   - Trả ra `number` là tổng số phần tử trong mảng.
  //   - Vì `index` bắt đầu từ `0`, nên phần tử cuối cùng luôn ở vị trí `length - 1`.

  //   - Tác dụng phụ: mảng gốc bị thay đổi
  // - **B. `push()`** - Thêm phần tử vào cuối mảng
  //   - Cú pháp:
      
      //tenMang.push(giaTri);
      
    //- Đầu ra: số lượng phần tử mới của mảng sau khi thêm

  /*- **C. `pop()`** - Rút phần tử cuối cùng ra ngoài
  - **D. `shift()`** - Rút phần tử đầu tiên ra ngoài
  - **E. `unshift()`** - Thêm phần tử vào đầu mảng

  - **F. `includes()`** - Kiểm tra phần tử có tồn tại hay không
    - Cú pháp:*/
      
      //tenMang.includes(giaTri);

  // - **G. `join()`** - Gộp tất cả phần tử thành một chuỗi
  //   - Cú pháp:
      
      //tenMang.join(kiTuNoi);
      

  //- **H. `indexOf()`** - Trả ra `index` nếu tìm thấy, trả `-1` nếu không có

  


/*- **Object**
  - Có thể hiểu object giống như một cái tủ có dán nhãn:
    - Khi muốn lấy một "ngăn kéo", ta lấy theo **tên ngăn kéo**.

  - **Quy tắc vàng:**
    - Dùng **array** khi bạn có một danh sách gồm nhiều thứ giống nhau, ví dụ: danh sách user, giá, sản phẩm.
    - Dùng **object** khi cần mô tả chi tiết **một thứ duy nhất**, ví dụ: một user, một sản phẩm, hoặc một cấu hình test.

  - **Cú pháp:**
    - Dùng dấu ngoặc nhọn `{}`.
    - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.

  - **Key và value:**
    - **Key**: tên thuộc tính, giống như nhãn dán trên ngăn kéo.
    - **Value**: dữ liệu nằm trong ngăn kéo, có thể là `string`, `number`, `boolean`, `array`, hoặc `function`.

  - **Ví dụ:**/

    let userTest = {
      hoTen: "Neko Nguyen",
      tuoi: 30,
      isVip: true,
      quyenHan: ["read", "write"],
    };
    

  /*- **Quy tắc đặt tên key:**
    - Nếu key là tên hợp lệ theo quy tắc đặt tên biến, thường **không cần dấu nháy**.
    - Nếu key chứa **dấu cách** hoặc **dấu gạch ngang `-`**, phải bọc trong dấu nháy kép.

  - **Cách truy xuất dữ liệu:**
    - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
      - Cú pháp:
        
        tenObject.key;
        
      - Dùng khi key là tên hợp lệ.

    - **B. Dùng dấu ngoặc vuông `[]`**
      - Cú pháp:
        
        tenObject["tenKey"];
        
      - Dùng khi key có dấu cách, dấu gạch ngang, hoặc cần truy cập động.

  - **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
    - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

  - **Các phương thức thường dùng của object:**
    - **A. `Object.keys()`** - Lấy tất cả key thành một mảng
    - **B. `Object.values()`** - Lấy tất cả value thành một mảng
    - **C. `Object.entries()`** - Lấy cả key và value thành từng cặp
    - **D. `Object.hasOwn()`** - Kiểm tra key có phải là thuộc tính của chính object đó hay không

  - **Cú pháp `Object.hasOwn()`:**
    
    Object.hasOwn(tenObject, "tenKey");
    

## Array of Object

- Cấu trúc này được bao bên ngoài bằng ngoặc vuông `[]`.
- Bên trong mảng chứa các object, mỗi object được bao bằng ngoặc nhọn `{}`.*/

//##
let apiResponses = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};

  // console.log(apiResponses.userId); // lấy value của 1 key
  // console.log(apiResponses.username);
  // console.log(apiResponses.email);
  
  for(let apiResponse in apiResponses){
    // let value_key_userId = apiResponses.userId; // lấy key tĩnh, lấy từng key
    // let value_key_username = apiResponses.username;
    // let value_key_email = apiResponses.email;
    // console.log(value_key_userId);
    // console.log(value_key_username);
    // console.log(value_key_email);
    
    // let value = apiResponses[apiResponse]; // lấy key động, lấy toàn bộ key
    // console.log(value);
  
  }

  //### kiểu object -> mảng -> key
let apiResponses_1 = {
    userId: [101, 102, 103],
    username: ["neko_tester_A", "neko_tester_B", "neko_tester_C"],
    email: ["test@gmail_0.com", "test@gmail_1.com", "test@gmail_2.com"],
    isActive: [true, false, true], // có bug string
    phone: ["0123456789", "012345678", "01234567"],
    role: ["admin", "user", "manage"]
};

 console.log(apiResponses_1.userId[0]); // lấy value của 1 key ở vị trí của mảng
 console.log(apiResponses_1.userId[2]);
 console.log(apiResponses_1.username[0]);
 console.log(apiResponses_1.username[2]);
 console.log(apiResponses_1.email[0]);
 console.log(apiResponses_1.email[2]);

 for(let apiResponse in apiResponses_1){
    // let value_key_userId_0 = apiResponses_1.userId[0]; // lấy key tĩnh, lấy từng key
    // let value_key_userId_1 = apiResponses_1.userId[1];
    // let value_key_username_0 = apiResponses_1.username[0];
    // let value_key_username_1 = apiResponses_1.username[1];
    // let value_key_email_0 = apiResponses_1.email[0];
    // let value_key_email_1 = apiResponses_1.email[1];
    // console.log(value_key_userId_0,value_key_userId_1);
    // console.log(value_key_username_0,value_key_username_1);
    // console.log(value_key_email_0,value_key_email_1);

    let value_0 = apiResponses_1[apiResponse][0]; // lấy key động, lấy hết value ở vị trí mảng [0] của tất các key
    let value_1 = apiResponses_1[apiResponse][1];
    let value_2 = apiResponses_1[apiResponse][2];
    console.log(value_0);
    console.log(value_1);
    console.log(value_2);
     
 }

