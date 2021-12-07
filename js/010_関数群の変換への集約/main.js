var reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

//呼び出し側1
const aReading = acquireReading(); //基本料金
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

//呼び出し側2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxbleCharge = Math.max(0, base - taxThreshold(aReading.year));

//呼び出し側3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;

}