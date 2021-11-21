class Book{
    //利用者への貸出予約を受け付けるメソッド
    //→パラメータを追加して優先度付き待ち行列をサポートする
    addReservation(customer){
        this.zz_addReservation(customer,false);
    }

    zz_addReservation(customer,isPriority){
        //アサーションは常に真であることを前提とした条件分
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }

}