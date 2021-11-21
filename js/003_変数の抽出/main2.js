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
        return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(basePrice * 0.1, 100);
    }
}