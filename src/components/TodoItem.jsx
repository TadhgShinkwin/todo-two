import React from "react"


 function TodoItem({todo, index, completeTodo, removeTodo, chooseColor}){
     return(
         <div 
         style={{
                backgroundColor: todo.color ? todo.color: "", 
                textDecoration: todo.isCompleted ? "line-through":"", 
                fontStyle: todo.isCompleted ? "italic": "",
                color: todo.isCompleted ? "#8c8c8c": ""
        }} 
         className="todo"
         >
             <div onClick>{todo.text}</div>
             <div>
                 <button onClick={()=>completeTodo(index)}>&#10004;</button>
                 <button onClick={()=>removeTodo(index)}>X</button>
                 <br/>
                 <select name="colorChoose" value={todo.color} onChange={e=>chooseColor(index,e.target.value)}>
                     <option value="" disabled selected>--Set Difficulty--</option>
                     <option value="#99ffbb">Easy</option>
                     <option value="#ffbf80">Medium</option>
                     <option value="#ff8080">Hard</option>
                 </select>
             </div>
         </div>
     )
 }

export default TodoItem
