//スコープ外となる変数が存在しない場合
function printOwing(invoice){

    printBanner()                         //バナー表示
    outstanding = recordDueDate(invoice); //未払い金の計算
    recordDueDate(invoice);               //締め切り日の記録
    printDetails(invoice, outstanding);   //明細の印字
    
}

function printBanner(){
    console.log("******************");
    console.log("***Customer Ower***");
    console.log("******************");    
}

function calculate(invoice){
    let outstanding = 0;
    for(const o of invoice.orders){
        outstanding += o.amount;
    }
    return outstanding;
}

function recordDueDate(invoice){
    const today = Clock.today;//システム時間の呼び出しをラップ
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding){
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocalDateString()}`);     
}