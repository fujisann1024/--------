//配列numbersを宣言
const numbers = [2,4,6,8];

const ListItems = () => {

    const items = numbers.map((item) => 
    <li key = {item.toString()}>{item}</li>);

    return <ul>{items}</ul>
}

export default ListItems