import logo from "./logo.svg";
import "./App.css";

import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
    //console.log(todo);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (todo == "") {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    console.log(toDos);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={todo}
        type="text"
        placeholder="Write ypur toDos"
      ></input>
      <button>Add To do</button>
    </form>
  );
}

export default App;
