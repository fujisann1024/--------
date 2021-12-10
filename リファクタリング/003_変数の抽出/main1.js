function price(order){
    //価格 = 数量 * 単価
    const basePrice = order.quantity * order.itemPrice; 

    //数量割引　= 数量から500を超えた分の価格を5パーセント引き
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;

    //送料 =　価格 * 10％ ※価格が1000以上であれば送料100円で固定
    const shopping =    Math.min(basePrice * 0.1, 100);
    
    return basePrice -　quantityDiscount + shopping;
}