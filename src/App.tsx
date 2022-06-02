import React, {useState} from 'react';
//import {BtnAndTable} from "./BtnAndTable";
// import {Button} from "./components/Button";
// import {Simulate} from "react-dom/test-utils";
import classes from "./App.module.css";
import {FullInput} from "./components/Fullinput";


type MessageType = {
    message: string
}

function App() {
    let [message, setMessage] = useState<Array<MessageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}])

    const addMessage = (t: string) => {
        let newMessage = message.concat([{message: t}])
        setMessage(newMessage)
    }

    return (
        <div className={classes.app}>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


export default App;

