import React, {useState} from "react";

const SelectForm  = () => {
    const [selectedVaue, setSelectedValue] = useState("HTML");

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
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
        </div>
    );
};

export default SelectForm;