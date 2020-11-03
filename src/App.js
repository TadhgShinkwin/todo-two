import React, {useState} from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {
  const [ todo, setTodo ] = useState("")
  const [ todoList, setTodoList] = useState(["Say Hello", "Say Goodbye"])


  let handleChange = e =>{
    const{name, value} = e.target
    setTodo(value)
  }

  let handleSubmit = e =>{
    e.preventDefault()
    if(todo){
      const newTodo = todo
      const updatedTodos = [...todoList, newTodo]
      setTodoList(updatedTodos)
      setTodo("")
    }
    else{
      alert("Nothing entered!")
    }
  }
  let clearList = () => setTodoList([])


  return (
    <div>
      <h1>This is the main app now - {todo}</h1>
      <Input 
      todo={todo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      <List 
      todoList={todoList}
      clearList={clearList}
      />
    </div>
  );
}

export default App;
