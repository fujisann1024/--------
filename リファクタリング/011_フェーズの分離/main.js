function priceOrder(product, quantity, shippingMethod){
    const priceData = calculatePricingData(product,quantity);
    return applyShipping(priceData,basePrice,shippingMethod,discount);
}

function calculatePricingData(product,quantity){
    const basePrice = product.basePrice * quantity; //価格
    const discount = Math.max(quantity * product.discountThreshold, 0)
                    * product.basePrice * product.discountRate//値引き額
    return {basePrice: basePrice, quantity: quantity, discount: discount};//中間データ
}

function applyShipping(priceData,shippingMethod){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
                    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount * shippingCost;
}