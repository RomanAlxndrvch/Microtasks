import React from 'react';
import logo from './logo.svg';
import classes from "./App.module.css";
import {Button} from "./components/Button";


function App() {

    const btn1 = (name: string, age: number) => {
        console.log(name, age)
    }

    const btn2 = (name: string) => {
        console.log(name)
    }
    const btn3 = () => {
        console.log('Im Stupid Button')
    }

    return (
        <div className={classes.app}>
            <Button name={'My YouTube Channel 1'} callBack={() => btn1('1', 21)}/>
            <Button name={'My YouTube Channel 2'} callBack={() => btn2('2',)}/>
            <Button name={'Im Stupid Button'} callBack={btn3}/>
        </div>
    );
}

export default App;
