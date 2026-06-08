class Cart {
    #items = [];
    discountPercent  = 0;

addItem(item){

    const name = item.name.trim().toLowerCase();
    const  isDuplicate = this.#items.find(product => product.name.trim().toLowerCase() === name)
    if(isDuplicate){
        isDuplicate.quantity += item.quantity;
        return {
        success: true,
        message: "Thêm số lượng sản phẩm thành công"
        };
    }

    if(name === ""){
        return {
            success: false,
            message: "Name rỗng"
        };
    }

    if(item.quantity <= 0 || item.price <= 0){
        return {
            success: false,
            message: "không hợp lệ"
        };
    }

    this.#items.push(item);
    return {
        success: true,
        message: "Thêm sản phẩm thành công"};
    

}
removeItem(name){
    const cleanName = name.trim().toLowerCase();
    this.#items =  this.#items.filter(product => product.name.trim().toLowerCase() !== cleanName)
}

getSubtotal(){
    const total = this.#items.reduce((total, item) => {
        return total + (item.price * item.quantity)
    },0);
    return total;
}

applyCoupon(code){

    const cleanCodeDiscount = code.trim().toUpperCase();

    if(cleanCodeDiscount === "SALE10"){
        this.discountPercent = 10;
        return true;
    }
    else if (cleanCodeDiscount === "SALE20"){
        this.discountPercent = 20;
        return true;
    }
    else{
        return false;
    }
}
checkout(){
    const subtotal = this.getSubtotal();
    const discount = subtotal / 100 * this.discountPercent;
    const total =  subtotal - discount;

    return { 
    items: this.#items,   
    subtotal: subtotal,
    discount: discount,
    total: total
    }
}
}

class VipCart extends Cart{
    constructor(memberName) {
        super();
        this.memberName = memberName;
    }

    applyCoupon(code){
        const result = super.applyCoupon(code);

        if (result) {
            return true;
        }

        const cleanCodeDiscount = code.trim().toUpperCase();
        if(cleanCodeDiscount === "VIP30"){
            this.discountPercent = 30;
            return true;
        }
        else{
            return false;
        }
    }

    checkout(){
        const billOriginal = super.checkout()
        return {
            ... billOriginal,
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