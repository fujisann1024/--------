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

/**
 * 範囲外の測定結果を検出する関数
 * @param {*} station 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function readingsOutsideRange(station, min, max){
    return station.readings
    .filter(r => r.temp < min || r.temp > max);
}

//呼び出し側//
var operation = {
    temperatureFloor: 20,
    temperatureCeiling: 55
}

alerts = readingsOutsideRange(
    station
    ,operation.temperatureFloor
    ,operation.temperatureCeiling
);