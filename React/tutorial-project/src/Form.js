import React, {useState} from "react";
const Form = () => {
    //const [状態変数、状態を変更するための関数] = useState(状態の初期化)
    //inputTextValueの状態の初期値は空の文字列
    const [inputTextValue, setInputTextValue] = useState(" ");

    //textの状態の初期値はJavaScript
    const [text, setText] = useState("JavaScript");

    //onChangeでinputTextValueの状態を更新するイベントハンドラ
    const handleChange = (e) => setInputTextValue(e.target.value);

    const handleClick = () => {
        setText(inputTextValue);
        setInputTextValue(" ");
    };
    
    return (
        <div>
            {/*画面上の表示がクリックされるたびに変更する*/}
            <h1>I LOVE {text}!!</h1>

            {/*テキストが入力されるたびに更新される*/}
            <input type="text" value={inputTextValue} onChange={handleChange}/>

            {/*入力ボタンでtextが更新される*/}
            <input type="button" value="入力" onClick={handleClick}/>
        </div>
    );
};

export default Form;