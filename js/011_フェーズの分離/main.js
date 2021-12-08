function priceOrder(product, quantity, shippingMethod){
    const basePrice = product.basePrice * quantity; //価格
    const discount = Math.max(quantity * product.discountThreshold, 0)
                    * product.basePrice * product.discountRate//値引き額
    const priceData = {basePrice: basePrice};
    const price = applyShipping(priceData,basePrice,shippingMethod,quantity,discount);
    return price;
}

function applyShipping(priceData,shippingMethod,quantity,discount){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
                    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount * shippingCost;
    return price;
}