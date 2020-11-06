import React, {useState} from "react"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem"
import { ReactSortable } from "react-sortablejs"
import "./App.css"


function App() {
  const [todoList, setTodoList] = useState([])

 

  const addTodo = text =>{ //this function adds a new todo to the existing list
     const newTodos = [...todoList, {text}]
     console.log(newTodos)
     setTodoList(newTodos)
     console.log(todoList)
  }

  const completeTodo = index =>{ //this function marks the specified (by index) todo as complete
    const newTodos = [...todoList]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodoList(newTodos)
  }

  const removeTodo = index =>{ //this function removes the specified (by index) todo from the list
    const newTodos = [...todoList]
    newTodos.splice(index, 1)
    setTodoList(newTodos)
  }

  const clearList = () => setTodoList([]) //this function clears the entire list
  
  const chooseColor = (index, value) =>{
    const newTodos = [...todoList]
    newTodos[index].color = value
    setTodoList(newTodos)
  }
  

  return (
    <div className="app"> 
      <div className="todo-list">
        <div className="header">
          <h1>To-Do List</h1>
        
          <hr/>
        </div>
        <br/>
        <ReactSortable list={todoList} setList={setTodoList}>
          {todoList.map((todo, index)=>
          <TodoItem 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            chooseColor={chooseColor}
          />)}
        </ReactSortable>
        <div className="controls">
          <button onClick={clearList} style={{display:todoList.length == 0 ? "none": ""}}>Clear List</button>
          <p><em>*Click and Drag to sort</em></p>
          <hr/>
        </div>
        <Input addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
