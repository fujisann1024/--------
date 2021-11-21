//スコープ外となる変数が存在しない場合
function printOwing(invoice){
    let outstanding = 0;

    console.log("******************");
    console.log("***Customer Ower***");
    console.log("******************");

    //未払い料金の計算
    for(const o of invoice.orders){
        outstanding += o.amount;
    }

    //締め切り日の記録
    const today = Clock.today;//システム時間の呼び出しをラップ
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    //明細の印字
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocalDateString()}`);   
}