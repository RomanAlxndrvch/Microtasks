import React, {useState} from 'react';
import {BtnAndTable} from "./BtnAndTable";
// import {Button} from "./components/Button";
// import {Simulate} from "react-dom/test-utils";


function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [button, defineBtn] = useState('')

    let currentMoney = money

    if (button === 'Rubls') {
        currentMoney = money.filter((el) => el.banknots === 'RUBLS')
    }
    if (button === 'Dollars') {
        currentMoney = money.filter((el) => el.banknots === 'Dollars')
    }
    if (button === 'All') {
        currentMoney = money
    }

    ////////////////////////////////////////////

    const onClickFilterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget.innerText
        defineBtn(button = btn)


    }

    return (
        <BtnAndTable banknots={currentMoney} onClickHandler={onClickFilterHandler}/>
    )
}


export default App;

