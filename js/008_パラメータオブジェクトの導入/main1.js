class NumberRange{
    constructor(min, max){
        this._data = {Min: min, Max: max};
    }
    get Min() {return this._data.Min;}
    get Max() {return this._data.Max}
    //範囲内であるかどうか
    contains(args) {return (arg >= this.Min && args <= this.Max);}
}

const station 
= { name: "ZB1",
  readings: [
      {temp: 47, time: "2016-11-10"},
      {temp: 53, time: "2016-11-20"},
      {temp: 58, time: "2016-11-30"},
      {temp: 53, time: "2016-11-40"},
      {temp: 51, time: "2016-11-50"},
      ]
};

function readingsOutsideRange(station, range){
    return station.readings
    .filter(r => !range.contains(r.temp));
}

//呼び出し側//
var operation = {
    temperatureFloor: 20,
    temperatureCeiling: 55
}

const range = new NumberRange(
    operation.temperatureFloor
   ,operation.temperatureCeiling)
alerts = readingsOutsideRange(
    station
   ,range
);