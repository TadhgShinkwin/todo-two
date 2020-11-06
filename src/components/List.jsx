import React from "react"
import TodoItem from "./TodoItem"

function List(props){
    
    const items = props.todoList.map(todo => <TodoItem 
        item={todo}
    />)
    return(
        <div>
            <h1>This is the old list</h1>
            {items}
            <button onClick={props.clearList}>Clear List</button>
        </div>
    )
}

export default List