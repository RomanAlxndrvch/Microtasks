import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
}

export function ButtonForInput(props: ButtonPropsType) {
    function onClickButtonHandler() {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}