/*# 📚 JavaScript Array Methods (Automation Testing Focus)

## 🔹 1. Thêm / Xóa phần tử

* `push()` → thêm cuối
* `pop()` → xóa cuối
* `unshift()` → thêm đầu
* `shift()` → xóa đầu

---

## 🔹 2. Duyệt & Transform (Dùng nhiều nhất)

* `forEach()` → duyệt từng phần tử
* `map()` → tạo mảng mới
* `filter()` → lọc phần tử
* `reduce()` → tính toán / gom dữ liệu

---

## 🔹 3. Tìm kiếm

* `find()` → lấy phần tử đầu tiên thỏa điều kiện
* `findIndex()` → lấy index
* `includes()` → kiểm tra tồn tại
* `indexOf()` → tìm vị trí

---

## 🔹 4. Cắt / Nối

* `slice()` → cắt mảng (không đổi mảng gốc)
* `splice()` → thêm/xóa/sửa (có đổi mảng gốc)
* `concat()` → nối mảng

---

## 🔹 5. Biến đổi

* `join()` → array → string
* `flat()` → làm phẳng mảng

---

## 🔹 6. Sắp xếp / Đảo

* `sort()` → sắp xếp
* `reverse()` → đảo mảng

---

## 🔹 7. Kiểm tra điều kiện

* `every()` → tất cả đúng
* `some()` → ít nhất 1 đúng

---

## ⚡ Most Used (Automation Testing)

```js
map, filter, find, forEach, includes, some, every
```

---

## 🧠 Use Cases (Thực tế)

* Parse API response
* Validate UI data
* So sánh expected vs actual
* Lọc log lỗi
* Xử lý test data

---

## 💡 Ghi nhớ nhanh

* Duyệt: `forEach`
* Tạo mảng mới: `map`
* Lọc: `filter`
* Tìm: `find`
* Check: `includes / some / every`*/

const users = [
  { id: 1, name: "An", age: 22, isActive: true, role: "user" },
  { id: 2, name: "Bình", age: 17, isActive: false, role: "user" },
  { id: 3, name: "Cường", age: 30, isActive: true, role: "admin" },
  { id: 4, name: "Dũng", age: 25, isActive: true, role: "user" },
  { id: 5, name: "Em", age: 16, isActive: false, role: "user" }
];

 const activeUsers = users.filter(user => user.isActive);
 console.log(activeUsers);

 const listName = users.map(name => name.name);
 console.log(listName);
 
 const adminRole = users.some(role => role.role);
 const printAdminRole = 
 console.log(adminRole);


 const ageUsers = users.every(age => age.age >= 18);
 console.log(ageUsers);
  
 