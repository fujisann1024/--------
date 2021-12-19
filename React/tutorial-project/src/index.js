import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginControl from "./LoginControl";
import Hello from "./Hello";
import ListItems from "./ListItem";
import EventController from "./EventController";
import Form from "./Form";
import SelectForm from "./SelectForm";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        
        <LoginControl/>

        <Hello/>

        <ListItems />

        <EventController />

        <Form />

        <SelectForm />
    </React.StrictMode>,
    document.getElementById('root')
);