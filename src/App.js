import logo from "./logo.svg";
import "./App.css";

import Button from "./Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
