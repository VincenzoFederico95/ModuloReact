import { Helloworld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { useState } from "react";
import { Clock } from "./Clock";

function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
   const [counter, setCounter] = useState(0)
    function incrementCounter () {
        setCounter (counter +1 )
    }
    function decrementCounter() {
        setCounter (counter - 1 )
    }
    function reset() {
        setCounter (0)
    }

  return (
    <div>
      <Helloworld />
      <Message />
      <Welcome name={<strong>John</strong>} age={44} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter counter={counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter}  reset = {reset} />
      <Clock/>
    </div>
  );
}

export default App;