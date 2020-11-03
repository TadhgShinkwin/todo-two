import React from "react"
import TodoItem from "./TodoItem"

function List(props){
    
    const items = props.todoList.map(todo => <TodoItem 
        item={todo}
        handleDelete={props.handleDelete}
    />)
    return(
        <div>
            <h1>This is the list</h1>
            {items}
            <button onClick={props.clearList}>Clear List</button>
        </div>
    )
}

export default List