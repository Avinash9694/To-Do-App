import Header from "./components/Header.js";
import AddTask from "./components/AddTask.js";
import ShowTask from "./components/ShowTask.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;
