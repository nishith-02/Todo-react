import React, { useState, useEffect } from "react";
import File from "./Components/File";
import Todos from "./Components/Todos";
import './Components/CSS/All.css'
function App() {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const [filteredtodos, setfilteredtodos] = useState([]);
  const [states, setstates] = useState("All");
  useEffect(() => {
    switch (states) {
      case "Completed":
        setfilteredtodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setfilteredtodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredtodos(todos);
        break;
    }
  }, [todos, states]);
  return (
    <div className="app">
      <File
        todos={todos}
        settodos={settodos}
        text={text}
        settext={settext}
        setstates={setstates}
      />
      <Todos todos={todos} filteredtodos={filteredtodos} settodos={settodos} />
    </div>
  );
}
export default App;
