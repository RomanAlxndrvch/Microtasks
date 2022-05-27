import React from "react";

type BtnPropsType = {
    name: string
    callBack: () => void
}

export function Button(props: BtnPropsType) {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}