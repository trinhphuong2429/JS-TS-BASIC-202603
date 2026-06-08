class ProductStore {
    #products = [];

addProduct(product) {
    const isDuplicate = this.#products.find(item => item.id === product.id);
    
    if (isDuplicate) {
        return {
            success: false,
            message: "Id sản phẩm đã tồn tại"
        };
    }

    const name = product.name.trim()
    if(name === "")
        return {
            success: false,
            message: "Name rỗng"
        };

    const category = product.category.trim()
    if(category === "")
        return {
            success: false,
            message: "Category rỗng"
        };

    if (product.price <= 0){
        return {
            success: false,
            message: "Price không hợp lệ"
        };
    }

    if (typeof product.inStock !== "boolean") {
        return {
            success: false,
            message: "không phải là boolean"
        };
    }

    this.#products.push(product);
    return {
        success: true,
        message: "Thêm sản phẩm thành công"
    };
}
findByName(keyword){

    const keywordClean = keyword.trim().toLowerCase();
    return this.#products.filter(product => product.name.toLowerCase().includes(keywordClean))
}

filterByCategory(category){
    const categoryClean = category.trim().toLowerCase();
    return this.#products.filter(product => product.category.toLowerCase() === (categoryClean))
}

getAvailableProducts(){
    return this.#products.filter(product => product.inStock === true)    
}

getTotalInventoryValue(){
    const availableProducts = this.getAvailableProducts();
    const totalValue = availableProducts.reduce((total, product) => {
        return total + product.price;
    },
    0)
    return totalValue;
} 
}
class DiscountProductStore extends ProductStore{

    constructor(discountRate){
        super();
        this.discountRate = discountRate;
    }
getTotalInventoryValue() {
    const getTotal = super.getTotalInventoryValue()
    return (getTotal - (getTotal * this.discountRate));
}

getDiscountInfo(){
const originalTotal = super.getTotalInventoryValue();
const discountAmount = originalTotal * this.discountRate;
    return {
        originalTotal : originalTotal,
        discountAmount : discountAmount,
        discountRate : this.discountRate,
        finalTotal : this.getTotalInventoryValue()
    }
}
}

const store = new DiscountProductStore(0.1);

console.log(
 store.addProduct({
  id: "p01",
  name: "  iPhone 15 Pro  ",
  category: "phone",
  price: 29990000,
  inStock: true,
}));

console.log(
store.addProduct({
  id: "p02",
  name: "MacBook Air",
  category: "laptop",
  price: 24990000,
  inStock: true,
}));

console.log(
store.addProduct({
  id: "p03",
  name: "AirPods Pro",
  category: "audio",
  price: 5990000,
  inStock: false,
}));

console.log(
store.addProduct({
  id: "p01",
  name: "Duplicate",
  category: "phone",
  price: 1000,
  inStock: true,
}));

store.findByName("iphone");
console.log(store.findByName("iphone"));

store.filterByCategory(" PHONE ");
console.log(store.filterByCategory(" PHONE "));

store.getAvailableProducts();
console.log(store.getAvailableProducts());

//store.getTotalInventoryValue();
//console.log(store.getTotalInventoryValue());

store.getDiscountInfo();
console.log(store.getDiscountInfo());