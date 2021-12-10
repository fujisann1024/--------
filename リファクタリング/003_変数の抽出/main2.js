class Order{
    constructor(aRecoed){
        this._data = aRecoed;
    }
    get quantity(){
        return this._data.quantity;
    }

    get itemPrice(){
        return this._data.itemPrice;
    }

    get price(){
        return this.basePrice - this.quantityDiscount + this.shipping;
    
    }

    get basePrice() {
        return order.quantity * order.itemPrice 
    }

    get quantityDiscount() {
        return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    }

    get shipping() {
        return Math.min(basePrice * 0.1, 100);
    }

}