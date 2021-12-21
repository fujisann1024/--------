class Car {
    get Name(){
        return this._name;
    }

    get Price(){
        return this._price;
    }

    constructor(name, price){
        this._name = name;
        this._price = price;
    }
}