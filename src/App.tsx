import React, {useState} from 'react';
import classes from "./App.module.css";
import {Button} from "./components/Button";
import {Simulate} from "react-dom/test-utils";


function App() {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const ZeroHandler = () => {
        setA(a = 0)
    }

    return (
        <div className={classes.app}>

            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={ZeroHandler}>0</button>

        </div>

    )
}


export default App;
