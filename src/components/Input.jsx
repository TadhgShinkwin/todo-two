import React from "react"

function Input(props){
    return(
        <div>
            <h1>This is the input part</h1>
            <button onClick={props.changeState}>Change todo</button>
        </div>
    )
}

export default Input