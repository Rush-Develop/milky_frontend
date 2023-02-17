import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
function App() {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const submitId = () => {
    const post = {
      plzid: id,
    };

    fetch("http://localhost:3001/idplz", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <input onChange={handleChange} name="id" />
      <button onClick={submitId}>Submit</button>
      <h1>{id}</h1>
    </div>
  );
}

export default App;
