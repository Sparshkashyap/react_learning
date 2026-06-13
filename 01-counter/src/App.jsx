import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import Header from "./Header";

function App() {
  console.log("App Component Rendered");

  const [count, setCount] = useState(0);
  const [ount, setount] = useState(100);

  const increment = () => {
    console.log("Button Clicked");
    setCount(count + 1);
    setount(ount + 50);

  };

  return (
    <div>

      <Header />
      <CounterDisplay count={count} />

      <h2>Count : {count}</h2>
      <h2>Ount : {ount}</h2>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;