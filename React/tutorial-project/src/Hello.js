const Hello = () => {
    const isReact = true;

    return (
        <div>
            <div>
            {( () => {
                //if文
                if(isReact){
                    return "Hello, React!!"
                }else{
                    return "GoodBy";
                }
            })() }
            </div>
            <div>
                {
                    //三項演算子
                    isReact ? "Hello, React!!" : "GoodBy"
                }
            </div>
        </div>

    );
};

export default Hello;