import React, {useState} from "react"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem"
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
        <h1>ToDo list</h1>
        {todoList.map((todo, index)=>
        <TodoItem 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          chooseColor={chooseColor}
        />)}
        <button onClick={clearList}>Clear List</button>
        <hr></hr>
        <Input addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
