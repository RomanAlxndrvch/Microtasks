import React from "react";
import classes from "./App.module.css";

type banknotType = {
    banknots: string,
    value: number,
    number: string
}

type banknotsPropsType = {
    banknots: Array<banknotType>
    onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export function BtnAndTable(props: banknotsPropsType) {
    return (
        <div className={classes.app}>
            <ul>
                {props.banknots.map((el, index) =>
                    <li key={index}>
                        <span> {el.banknots} </span>
                        <span> {el.value} </span>
                        <span> {el.number} </span>
                    </li>
                )}

            </ul>
            <button onClick={props.onClickHandler}>Dollars</button>
            <button onClick={props.onClickHandler}>Rubls</button>
            <button onClick={props.onClickHandler}>All</button>
        </div>
    )

}