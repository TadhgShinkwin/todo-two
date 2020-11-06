import React from "react"


 function TodoItem({todo, index, completeTodo, removeTodo, chooseColor}){
     return(
         <div style={{backgroundColor: todo.color ? todo.color: "", textDecoration: todo.isCompleted ? "line-through":""}} className="todo">
             {todo.text}
             <div>
                 <button onClick={()=>completeTodo(index)}>&#10004;</button>
                 <button onClick={()=>removeTodo(index)}>X</button>
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
