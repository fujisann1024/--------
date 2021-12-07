var reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

//呼び出し側1
const rawReading = acquireReading(); //基本料金
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

//呼び出し側2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxbleCharge = aReading.taxbleCharge;

//呼び出し側3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;

}

//引数で受け取ったデータのコピーを返す
function enrichReading(original){
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(aReading);
    result.taxbleCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    return result;
}