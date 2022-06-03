import React, {ChangeEvent, useState} from "react";

type AddMessagePropsType = {
    addMessage: (e: string) => void
}

export function FullInput(props: AddMessagePropsType) {
    let [title, setTitle] = useState('')

    function onChangeInputHandler(input: ChangeEvent<HTMLInputElement>) {
        setTitle(input.currentTarget.value)
    }

    function onClickButtonHandler() {
        props.addMessage(title)
    }


    return (
        <div>
            <div>
                <input onChange={onChangeInputHandler} value={title}/>
                <button onClick={onClickButtonHandler}>+
                </button>
            </div>
        </div>
    )
}