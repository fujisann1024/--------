//顧客が関西出身か判定する関数
// function inKansai(aCustomer){
//     //①変数の抽出
//     //const stateCode = aCustomer.address.state;
//     //③変数のインライン化
//     return xx_inKansai(aCustomer.address.state);
// }
//②関数の抽出
//⑤関数宣言の変更(xx_inKansai→inKansai)
function inKansai(stateCode){
    return ["大阪","京都","滋賀","兵庫","和歌山","奈良"].includes(stateCode)
}

//呼び出し側
//④関数のインライン化
//⑤関数宣言の変更(xx_inKansai→inKansai)
const newKansais = someCosutomers.filter(c => inKansai(c.address.stateCode));
