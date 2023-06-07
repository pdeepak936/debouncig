import "./styles.css";

export default function App() {
  const handleChange = (e) => console.log("api Call!");
  return (
    <div className="App">
      <header className="App-header">
        <p>Search</p>
        <input type="text" onChange={debounce(handleChange, 500)} />
      </header>
    </div>
  );
  //debouncing function to stop rerendering on every event
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
}
