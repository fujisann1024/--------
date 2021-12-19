import React, {useState} from "react";

const values = [
    {id:1,item:"HTML"},
    {id:2,item:"CSS"},
    {id:2,item:"JavaScript"},
];

const SelectItems = values.map((value) => {
    return (
        <option value={value.item} key={value.id}>
            {value.item}
        </option>
    );
});

const SelectForm  = () => {
    const [selectedVaue, setSelectedValue] = useState(values[0]['item']);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="App">
            <p>
                {/*onChangeでselectValueが更新されて画面上の表示が変化する */}
                <b>{selectedVaue}</b>
            </p>

            <select value={selectedVaue} onChange={handleChange}>
                {SelectItems}
            </select>
        </div>
    );
};

export default SelectForm;