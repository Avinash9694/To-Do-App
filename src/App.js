import { useState } from "react";

import Header from "./components/Header.js";
import AddTask from "./components/AddTask.js";
import ShowTask from "./components/ShowTask.js";

import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState([]);
  return (
    <div className="App">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} />
    </div>
  );
}

export default App;
