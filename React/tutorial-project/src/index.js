import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginControl from "./LoginControl";
import Hello from "./Hello";
import ListItems from "./ListItem";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        
        <LoginControl/>

        <Hello/>

        <ListItems />
    </React.StrictMode>,
    document.getElementById('root')
);