//イベント発生時に実行される任意の処理c
const handleClick = () => {
    console.log("click");
};



const hendleText = (e) => {
    return console.log(e.target.value);
}
//ボタンをクリックするたびにコンソールにclickの文字が表示される
const EventController = () => {
    return (
        <div>
        <input type="text" defaultValue="" onChange={hendleText}/>
        <input type = "button" value = "ボタン" onClick = {handleClick}/>
        </div>
    )
};

export default EventController;