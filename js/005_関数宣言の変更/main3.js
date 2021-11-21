//顧客が関西出身か判定する関数
function inKansai(aCustomer){
    return ["大阪","京都","滋賀","兵庫","和歌山","奈良"].includes(aCustomer.address.state)
}

//呼び出し側
const newKansais = someCosutomers.filter(c => inKansai(c));