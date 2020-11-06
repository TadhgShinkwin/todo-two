import React, {useState} from "react"

function Input({addTodo}){
    const [value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault()
        if(!value) return;
        addTodo(value)
        setValue("")
    }
    return(
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Add new ToDo"
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
            </form>         
        </div>
    )
}

export default Input