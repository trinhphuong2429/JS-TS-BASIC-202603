## Falsy & Truthy

### 1. Khái niệm
- Falsy: giá trị làm if(value) = false
- Truthy: còn lại

### 2. Falsy gồm
- false
- 0
- ""
- null
- undefined
- NaN
- -0 // ít gặp
- 0n // ít gặp

### 3. Truthy gồm
- còn lại
- "abc"
# chú ý dễ nhầm các trường hợp sau:
- "false"
- "0"
- []
- {}
- 123
- -5...

### 4. Cách dùng

if(value)  → có giá trị  
if(!value) → rỗng

### 5. Ví dụ

1.  if ("hello") → true
2.  if ("") → false
3.  if (0) → false
4.  if (1) → true
5.  if ("0") → true

6.  if (null) → false
7.  if (undefined) → false
8.  if (NaN) → false
9.  if (false) → false
10. if (true) → true

11. if (" ") → true
12. if ([]) → true
13. if ({}) → true
14. if ("false") → true
15. if ("null") → true

16. if (!"") → true
17. if (!"abc") → false
18. if (!0) → true
19. if (!"0") → false
20. if (![]) → false

### 6. Mẹo

if(truthy) -> phân nhánh TRUE
if(falsy) -> phân nhánh FASLE

if(!falsy) -> phân nhánh TRUE
if(!truthy) -> phân nhánh FALSE
