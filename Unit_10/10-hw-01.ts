interface IBook {
  title: string;
  author: string;
  year: number;
  genre: string;
  available: boolean;
};

type BookFilter = {
  title?: string;
  genre?: string;
  yearFrom?: number;
};

class Library{
    private books: IBook[] = [];

addBook(book: IBook): void{
    for (const bookInLibrary of this.books){
        if(bookInLibrary.title === book.title && bookInLibrary.title === book.title) {
            throw new Error("message: Id sản phẩm đã tồn tại")
        }
    }
    this.books.push(book)
}

getAllBooks(): IBook[] {
   return [...this.books];
}

findByTitle(keyword: string): IBook[] {
    const keywordClean = keyword.trim().toLowerCase();
    return this.books.filter(bookInLibrary => bookInLibrary.title.toLowerCase().includes(keywordClean))
}

filter(filter: BookFilter): IBook[]{
    let result = [...this.books];
    
    if(filter.title !== undefined){
      const title = filter.title.trim().toLowerCase();
      result = result.filter(bookInLibrary => bookInLibrary.title.trim().toLowerCase().includes(title));
    }

    if(filter.genre !== undefined){
      const genre = filter.genre.trim().toLowerCase();
      result = result.filter(bookInLibrary => bookInLibrary.genre.trim().toLowerCase().includes(genre));
    }

    if(filter.yearFrom !== undefined){
      const year = filter.yearFrom;
      result = result.filter(bookInLibrary => bookInLibrary.year >= year);
    }

    return result;
}

getAvailableBooks(): IBook[]{
  return this.books.filter(bookInLibrary => bookInLibrary.available === true)
}

getStats(){
  const total: number = this.books.length;
  const available: number = this.books.filter(bookInLibrary => bookInLibrary.available).length;
  const borrowed: number = this.books.filter(bookInLibrary => !bookInLibrary.available).length;
  const genres: string[] = this.books.map(bookInLibrary => bookInLibrary.genre);
  const genreSet: string[] = [...new Set(genres)];
   return  { 
      total: total,
      available: available, 
      borrowed: borrowed, 
      genres: genreSet
     }
}

borrowBook(title: string): boolean {
  const book = this.books.find(bookInLibrary => bookInLibrary.title === title);

  if (!book){
    throw new Error (`không tìm thấy sách ${title} trong thư viện`)
  }
  if (book.available === false){
    throw new Error (`Sách ${title} không có sẵn trong thư viện `)
  }
  book.available = false
    return true;  
}
returnBook(title: string): boolean {
  const borrowBook = this.books.find(bookInLibrary => bookInLibrary.title === title);
  if (!borrowBook){
    throw new Error (`không tìm thấy sách ${title} trong thư viện`)
  }
  if (borrowBook.available === true){
    throw new Error (`Sách ${title} có sẵn trong thư viện `)
  }
  borrowBook.available = true
    return true;  
}
}

const lib = new Library();
  lib.addBook({
  title: "Clean Code", 
  author: "Robert Martin",
  year: 2008,
  genre: "Programming",
  available: true,
});

lib.addBook({
  title: "Design Patterns",
  author: "GoF",
  year: 1994,
  genre: "Programming",
  available: true, 
});

lib.addBook({
  title: "Dế Mèn Phiêu Lưu Ký",
  author: "Tô Hoài",
  year: 1941,
  genre: "Văn học",
  available: false,
});

lib.addBook({
  title: "Refactoring",
  author: "Martin Fowler",
  year: 1999,
  genre: "Programming",
  available: true,
});

console.log(lib.getAllBooks());
console.log(lib.getAllBooks().length); // 4
console.log(lib.findByTitle("clean")); // [{ Clean Code }]
console.log(lib.filter({ genre: "Programming", yearFrom: 2000 })); // [{ Clean Code }]
console.log(lib.getAvailableBooks().length); // 3

const stats = lib.getStats();
console.log(stats.total); // 4
console.log(stats.available); // 3
console.log(stats.borrowed); // 1
console.log(stats.genres); // ["Programming", "Văn học"]

lib.borrowBook("Clean Code");
console.log(lib.getAvailableBooks().length); // 2

lib.returnBook("Clean Code");
console.log(lib.getAvailableBooks().length); // 3

// ---- Bộ test nâng cao: tự kiểm tra xử lý lỗi ----
// Thêm sách trùng title+author -> phải throw Error
try {
  lib.addBook({
    title: "Clean Code",
    author: "Robert Martin",
    year: 2020,
    genre: "Programming",
    available: true,
  });
  console.log("FAIL: trung lap khong bi bat");
} catch (e) {
  console.log("OK");
}
// Mượn sách không tồn tại -> phải throw Error
try {
  lib.borrowBook("Sach Khong Ton Tai");
  console.log("FAIL: sach khong ton tai khong bi bat");
} catch (e) {
  console.log("OK");
}
// Mượn sách đã có người mượn (Dế Mèn đang available: false) -> phải throw Error
try {
  lib.borrowBook("Dế Mèn Phiêu Lưu Ký");
  console.log("FAIL: sach da muon khong bi bat");
} catch (e) {
  console.log("OK");
}
// Trả sách đang có sẵn (Design Patterns đang available: true) -> phải throw Error
try {
  lib.returnBook("Design Patterns");
  console.log("FAIL: sach dang co san khong bi bat");
} catch (e) {
  console.log("OK");
}
// Tìm với keyword rỗng -> không crash, trả về tất cả
console.log(lib.findByTitle("").length); // 4
// Filter yearFrom=0 -> 0 là falsy, phải dùng !== undefined không dùng if(yearFrom)
console.log(lib.filter({ yearFrom: 0 }).length); // 4
