import React, { useState } from "react";

const values = [
    {id:1,item:"赤"},
    {id:2,item:"青"},
    {id:3,item:"黄"},
];

const RadioBtnItems = ({onChange, checked}) => 

//map()で配列valuesから要素を1つずつ取り出しvalueで受け取る
values.map((value) => {
    return (
        //key属性にvalue.idを指定する
        <label key={value.id}>
            <input type="radio" value={value.item} onChange={onChange} checked={checked === value.item}/>
            {value.item}
        </label>
    );
});

const RadioForm = () => {
    const [checkedValue, setCheckedValue] = useState(values[0]['item']);

    const handleChange = (e) => setCheckedValue(e.target.value);

    return (
        <div className="App">
            {/*ラジオボタンonChangeでcheckedValueが更新されて画面上の表示が変化する */}
            <p>
                現在選択されている値:<b>{checkedValue}</b>
            </p>
            <RadioBtnItems onChange={handleChange} checked={checkedValue} />
        </div>
    );
};

export default RadioForm;