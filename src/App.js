import "./App.css";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <h1>This is React</h1>
      <Weather time="today" conditions="Overcast" tempF="45" />
      <Counter />
      <Switch />
      <Votes />
    </div>
  );
}

export default App;
