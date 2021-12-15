//関数コンポーネント内でstateを扱えるようにするため
//React import時にuseStateを読み込む
import React, { useState } from "react";

/**
 * LoginControlコンポーネント(親コンポーネント)からpropsで
 * 現在のログイン/ログアウト状態を受け取る
 */

//ログイン状態で表示されるLogoutButtonコンポーネント
const LogoutButton = (props) => {
   return <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
};

// ログアウト状態で表示されるLoginButtonコンポーネント
const LoginButton = (props) => {
   return <button onClick={props.toggleIsLoggedIn}>ログイン</button>
};

const LoginControl = () => {
    
    const [isLoggedIn, setIsLoggedInState] = useState(false);

    //クリックでログイン・ログアウトがトグルする関数
    const toggleIsLoggedIn = () => {
        setIsLoggedInState(!isLoggedIn);
    }

    //ログイン状態で、ログアウトボタンを表示させる
    if(isLoggedIn){
        return <LogoutButton toggleIsLoggedIn = {toggleIsLoggedIn}/>;
    }

    //ログアウト状態でログインボタンを表示させる
    return <LoginButton toggleIsLoggedIn = {toggleIsLoggedIn}/>;
};

export default LoginControl;