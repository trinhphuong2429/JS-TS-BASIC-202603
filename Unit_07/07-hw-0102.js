class ProductStore {
    #products = [];

addProduct(product){
    const normalizedProduct = {
        ...product,
        id: product.id.trim().toLowerCase(),
        name: product.name.trim().toLowerCase(),
        category: product.category.trim().toLowerCase(),
    };
    // method find trả về 1 phần từ đầu tiên tìm thấy hoặc 1 undefined
    const isDuplicate = this.#products.find
        (productInStore => productInStore.id === normalizedProduct.id)

    if(isDuplicate){
        return {
            success: false,
            message: "Id sản phẩm đã tồn tại"
        };
    }
    if(normalizedProduct.name === ""){
        return {
            success: false,
            message: "Name rỗng"
        }
    }
    if(normalizedProduct.category === ""){
        return {
            success: false,
            message: "Category rỗng"
        }
    }
    if(normalizedProduct.price <= 0){
        return {
            success: false,
            message: "Price không hợp lệ"
        }
    }
    if(typeof normalizedProduct.inStock !== "boolean"){
        return {
            uccess: false,
            message: "Không phải kiểu boolen"
        }
    } 

    this.#products.push(product)
    return {
        success: true,
        message: "Thêm sản phẩm thành công"
    };   
}
findByName(keyword){
    const keywordClean = keyword.trim().toLowerCase()
    return this.#products.filter(productInStore => productInStore.name.includes(keywordClean))
}
filterByCategory(category){
    const categoryClean = category.trim().toLowerCase()
    return this.#products.filter(productInStore => productInStore.category === categoryClean)
}  
getAvailableProducts(){
    return this.#products.filter(productInStore => productInStore.inStock === true)
}
getTotalInventoryValue(){
    const availableInStock = this.getAvailableProducts()
    const totalValueAvailableInStock = availableInStock.reduce((total, productInStore) => {
        return total + productInStore.price 
    },0)
    return totalValueAvailableInStock;
}
}
class DiscountProductStore extends ProductStore {
    constructor(discountRate){
        super();
        this.discountRate = discountRate;
    }
    getTotalInventoryValue(){
        const getTotal = super.getTotalInventoryValue()
        return (getTotal - (getTotal * this.discountRate));
    }
    getDiscountInfo(){
        const originalTotal = super.getTotalInventoryValue();
        const discountAmount = originalTotal * this.discountRate;
            return{
                originalTotal,
                discountAmount,
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

store.getTotalInventoryValue();
console.log(store.getTotalInventoryValue());

store.getDiscountInfo();
console.log(store.getDiscountInfo());