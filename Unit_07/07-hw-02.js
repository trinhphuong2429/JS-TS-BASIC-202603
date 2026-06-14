class Cart {
    #items = []
    discountPercent  = 0;

addItem(item){
    const normalizedItem = {
        ...item,
        name: item.name.trim().toLowerCase()
    }
    const isDuplicate = this.#items.find(itemInCart => itemInCart.name === normalizedItem.name)
    if(isDuplicate){
        isDuplicate.quantity += normalizedItem.quantity;
        return {
        success: true,
        message: "Thêm số lượng sản phẩm thành công"
        };
    }
    if(normalizedItem.name === ""){
        return {
        success: false,
        message: "Tên sản phẩm rỗng"
        };  
    }
    if(normalizedItem.quantity <= 0 || normalizedItem.price <= 0){
        return {
        success: false,
        message: "Tên sản phẩm rỗng"
        };   
    }

    this.#items.push(normalizedItem)
    return {
        success: true,
        message: "Thêm sản phẩm thành công"
        };
}
removeItem(name){
    const clearName = name.trim().toLowerCase()
    this.#items = this.#items.filter(itemInCart => itemInCart.name.trim().toLowerCase() !== clearName)
}
getSubtotal(){
    const originalTotal = this.#items.reduce((originalTotal, itemInCart) => {
        return originalTotal + (itemInCart.price * itemInCart.quantity)
    },0)
    return originalTotal;
}
applyCoupon(code){
    const codeClean = code.trim().toUpperCase()
    if(codeClean === "SALE10"){
        this.discountPercent = 10; 
        return true
    }
    else if(codeClean === "SALE20"){
        this.discountPercent = 20; 
        return true
    }
    else{
        return false
    }
}
checkout(){
    const subtotal = this.getSubtotal()
    const discount = subtotal / 100 * this.discountPercent
    const total = subtotal - discount
    return {
        items: this.#items,
        subtotal,
        discount,
        total
    }
}
}

class VipCart extends Cart{
    constructor(memberName){
        super();
        this.memberName = memberName;
    }
    applyCoupon(code){
        const result = super.applyCoupon(code);
        if(result){
            return true
        }
        const cleanCode = code.trim().toUpperCase()
        if(cleanCode === "VIP30"){
            this.discountPercent = 30;
            return true;
        }else{
            return false;
        }
    }
    checkout(){
        const originalBill = super.checkout();
        return{
            ...originalBill,
            memberName: this.memberName,
            cartType: "VIP"
        }
    }

}
const cart = new VipCart("Neko");

console.log(
 cart.addItem({ 
  name: "Trà sữa trân châu",
  price: 30000,
  quantity: 2,
}));

console.log(
cart.addItem({
  name: "  trà SỮA trân châu  ",
  price: 30000,
  quantity: 1,
}));

console.log(
cart.addItem({
  name: "Trà đào",
  price: 25000,
  quantity: 1,
}));

console.log(
 cart.applyCoupon(" vip30 "));
console.log( 
 cart.checkout());