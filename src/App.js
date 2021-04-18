import "./App.css";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Votes from "./components/Votes";
import Weather from "./components/Weather";
import QuoteList from "./components/QuoteList";
import Quote from "./components/Quote";
import ColorPicker from "./components/ColorPicker";
import CodeEntry from "./components/keypad/CodeEntry";

function App() {
  const weatherData = [
    { time: "today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    {
      time: "today",
      highF: 66,
      lowF: 50,
      conditions: "Sunny",
    },
    {
      time: "today",
      highF: 52,
      lowF: 50,
      conditions: "Light Showers",
    },
  ];
  const quoteData = [
    {
      author: "Nelson Mandela",
      text: "It always seems impossible until it’s done.",
      date: "2001",
    },
    {
      author: "Yoda",
      text: "Do. Or do not. There is no try.",
      date: "A long time ago",
    },
    { author: "Bugs Bunny", text: "What's up, doc?" },
  ];
  return (
    <div className="App">
      <h1>This is React</h1>
      <Counter />

      <Switch />

      <Votes />
      <ColorPicker />
      <section>
        <CodeEntry />
      </section>
      {weatherData.map((data) => (
        <Weather
          time={data.time}
          conditions={data.conditions}
          tempF={data.highF}
        />
      ))}
      {/* <Weather time="today" conditions="Overcast" tempF={45} />
       <Weather time="tomorrow" conditions="Sunny" tempF={52} />
       <Weather time="tuesday" conditions="Thunderstorms" tempF={55} /> */}

      <QuoteList />
      {quoteData.map((data) => (
        <Quote author={data.author} text={data.text} date={data.date} />
      ))}
      <Quote
        author="Gucci Mane"
        text="If a man does not have sauce, then he is lost. But the same man can get lost in the sauce."
        date="Lost to sauce"
      />
      <Quote
        author="Uncle Ben"
        text="With great power comes great responsibility."
      />
      <Quote
        author="Voltaire"
        text="If we do not find anything pleasant, at least we shall find something new"
        date="1759"
      />
    </div>
  );
}

export default App;
