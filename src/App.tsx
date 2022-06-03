import React, {useState} from 'react';
import classes from "./App.module.css";
import {Input} from "./components/Input";
import {ButtonForInput} from "./components/ButtonForInput";


type MessageType = {
    message: string
}

function App() {
    let [message, setMessage] = useState<Array<MessageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}])

    let [title, setTitle] = useState('')

    const addMessage = (t: string) => {
        const newMessage = {message: t}
        setMessage([newMessage, ...message])
        setTitle('')
    }

    function callBackButton() {
        addMessage(title)
    }

    return (
        <div className={classes.app}>
            <Input title={title} setTitle={setTitle}/>
            <ButtonForInput name={'+'} callback={callBackButton}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}


export default App;

