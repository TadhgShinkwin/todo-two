import React, {useState} from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {
  const [ todo, setTodo ] = useState("walk dog")

  function changeState(){
    setTodo(todo ==="walk dog" ? "go home" : "walk dog")
  }

  return (
    <div>
      <h1>This is the main app now - {todo}</h1>
      <Input changeState = {changeState}/>
      <List />
      <button onClick={changeState}>Button</button>
    </div>
  );
}

export default App;
