/*## Bài 1: Refactor hàm `taoPayloadDangNhap()`

### Bối cảnh thực tế

Form đăng nhập ngoài đời thường rất bẩn:

- người dùng gõ thừa khoảng trắng
- role viết hoa viết thường lung tung
- checkbox `remember me` lúc thì là `true`, lúc là `"yes"`, lúc là `"on"`
- dev truyền object input vào nhiều nơi, chỉ cần sửa trực tiếp nhầm một lần là bug dây chuyền

### Đề bài

Viết hàm:

```javascript
function taoPayloadDangNhap(formInput, options = {})
```

### Bộ data test dùng để làm bài

```javascript*/
const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];


/*Khi làm với bộ data test này:

- `formInput` nhận `loginTestData[i].formInput`
- `options` nhận `loginOptions`
- Ví dụ gọi hàm: `taoPayloadDangNhap(loginTestData[0].formInput, loginOptions)`

### Yêu cầu

1. Dùng object destructuring để lấy dữ liệu từ `formInput`.
2. Dùng object destructuring + default value để lấy dữ liệu từ `options`.
   - Nếu `options.defaultRole` không có thì biến `defaultRole` nhận `"guest"`.
   - Nếu `options.minPasswordLength` không có thì biến `minPasswordLength` nhận `8`.
   - `"guest"` và `8` lấy theo `loginOptions` đã cho ở đầu bài, không phải tự nghĩ thêm.
   - `allowedRoles` lấy thẳng từ `options.allowedRoles`, không tự thêm giá trị khác.
   - Trong bộ data test hiện tại, `options` đã có đủ field nên 2 giá trị mặc định này có thể không chạy; chúng được giữ lại để bám đúng YC2.
3. Chuẩn hóa dữ liệu:
   - `username` -> trim, chuyển về lowercase
   - `password` -> trim
   - `role` -> trim, lowercase
   - `device` -> trim
   - `rememberMe` -> chuyển về boolean
4. Kiểm tra hợp lệ:
   - `username` không được rỗng
   - `username` không được chứa khoảng trắng ở giữa
   - `password` phải dài ít nhất `minPasswordLength`
   - `role` phải nằm trong `allowedRoles`
5. Không được sửa trực tiếp `formInput` hoặc `options`.
6. Phải trả về object theo dạng:

```javascript
{
    isValid: true,
    payload: {
        username: "neko_admin",
        password: "12345678",
        role: "tester",
        rememberMe: true,
        device: "chrome-win11"
    },
    errors: []
}
*/

function taoPayloadDangNhap(formInput, options = {}) { 

    // destructuring + default value
    const { defaultRole = "guest",
        allowedRoles = [],
        minPasswordLength = 8 } = options 

        // tạo một object theo yêu cầu bài toán
        let result = {
            isValid: true,
            payload: {},
            errors: []
        }
        // destructuring kiểu object lồng nhau trong mảng
        //const { name, formInput } = login;
        const { username, password, role, rememberMe, device } = formInput;
        // chuẩn hoá dữ liệu
        const userNameClean = username.trim().toLowerCase();
        const passwordClean = password.trim();
        const roleClean = role.trim().toLowerCase();
        const deviceClean = device.trim();
        // chuyển từ kiểu string sang Boolean
        const rememberSring = String(rememberMe).trim().toLowerCase();
        const remembermeBool = ["yes", "on", "true"].includes(rememberSring);
        
        // kiểm tra pass hay fail
        if (userNameClean === "") {
            result.errors.push("userName không hợp lệ");
            result.isValid = false;
        } else if (userNameClean.includes(" ")) {
            result.errors.push("userName chứa khoảng trắng");
            result.isValid = false;
        }
        if (passwordClean.length < minPasswordLength) {
            result.errors.push("pass quá ngắn");
            result.isValid = false;
        }
        let finalRole = roleClean === "" ? defaultRole : roleClean;
        if (!allowedRoles.includes(finalRole)) { // kiểm tra roleClean có nằm trong allowedRoles hay không
            result.errors.push("Role không hợp lệ");
            result.isValid = false;
        }
        result.payload = {
            username: userNameClean,
            password: passwordClean,
            role: finalRole,
            rememberMe: remembermeBool,
            device: deviceClean
        }
    
    return result;
    }

    for (const { name, formInput } of loginTestData) {
        //console.log(name, taoPayloadDangNhap(formInput, loginOptions));
        console.log(taoPayloadDangNhap(formInput, loginOptions));
     }
    







