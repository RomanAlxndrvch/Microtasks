import React, {ChangeEvent, Dispatch, SetStateAction} from "react";

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export function Input(props: InputPropsType) {

    function onChangeInputHandler(input: ChangeEvent<HTMLInputElement>) {
        props.setTitle(input.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    )
}