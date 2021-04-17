import "./Counter.css";

function Counter() {
  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>0</p>
      <p>
        <button type="button">Down</button>
        <button type="button">Reset</button>
        <button type="button">Up</button>
      </p>
    </div>
  );
}
export default Counter;
