import "./App.css";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <h1>This is React</h1>
      <Counter />
      <Switch />
      <Votes />
    </div>
  );
}

export default App;
