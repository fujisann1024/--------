class Book{
    //利用者への貸出予約を受け付けるメソッド
    //→パラメータを追加して優先度付き待ち行列をサポートする
    addReservation(customer){
        this._reservations.push(customer)
    }
}