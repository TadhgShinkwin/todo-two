import React from "react"

function Input(props){
    return(
        <div>
            <h1>Input your Todos</h1>
            <form onSubmit={props.handleSubmit}>
                <input 
                type="text" 
                placeholder="Add new ToDo"
                name="todo"
                value={props.todo}
                onChange={props.handleChange}
                />
                <button>+</button>
            </form>         
        </div>
    )
}

export default Input