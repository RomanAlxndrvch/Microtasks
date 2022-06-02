import React, {ChangeEvent, useState} from "react";

type AddMessagePropsType = {
    addMessage: (e: any) => void
}

export function FullInput(props: AddMessagePropsType) {
    let [title, setTitle] = useState('')

    function onChangeInputHandler(input: ChangeEvent<HTMLInputElement>) {
        setTitle(input.target.value)
    }

    return (
        <div>
            <div>
                <input onChange={(e) => {
                    onChangeInputHandler(e)
                }}/>
                <button onClick={() => {
                    props.addMessage(title)
                }}>+
                </button>
            </div>
        </div>
    )
}