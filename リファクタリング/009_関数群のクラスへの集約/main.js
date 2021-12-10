class Reading {
    constructor(data){
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer(){return this._customer;}
    get quantity(){return this._quantity;}
    get month(){return this._month;}
    get year(){return this._year;}

    get baseCharge(){
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableChargeFn(aReading){
        return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    }
}
var reading = {
    customer: "ivan"
   ,quantity: 10
   ,month: 5
   ,year: 2017
}
//①基本料金の計算
const rowReading_1 = acquireReading();
const aReading_1 = new Reading(rowReading_1);
const baseCharge_1 = aReading_1.baseCharge;

//②税金を科す場合
const rowReading_2 = acquireReading();
const aReading_2 = new Reading(rowReading_2);
const taxableCharge = taxableChargeFn(aReading_2);

//①、②以外のコード
const rowReading_3 = acquireReading();
const aReading_3 = new Reading(rowReading_3);
const basicChargeAmount = aReading_3.baseCharge;