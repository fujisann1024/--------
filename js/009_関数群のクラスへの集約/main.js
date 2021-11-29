//計測値
var reading = {
    customer: "ivan"
   ,quantity: 10
   ,month: 5
   ,year: 2017
}

//①基本料金の計算
const aReading_1 = acquireReading();
const baseCharge_1 = baseRate(aReading_1.month, aReading_1.year) * aReading_1.quantity;

//②税金を科す場合
const aReading_2 = acquireReading();
const baseCharge_2 = baseRate(aReading_2.month, aReading_2.year) * aReading_2.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading_2.year));

//①、②以外のコード
const aReading_3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading_3);
function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

