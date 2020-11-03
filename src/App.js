import React, {useState} from "react"
import Input from "./components/Input"
import List from "./components/List"

function App() {
  const [ todo, setTodo ] = useState("walk dog")

  function changeState(){
    setTodo("go home")
  }

  return (
    <div>
      <h1>This is the main app now - {todo}</h1>
      <Input />
      <List />
      <button onClick={changeState}></button>
    </div>
  );
}

export default App;
