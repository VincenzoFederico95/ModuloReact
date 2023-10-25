import { AlertClock } from "./Alertclock";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { useState } from "react";

function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
  const [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Helloworld />
      <Message />
      <Welcome name={<strong>John</strong>} age={44} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter counter={counter} handleCounter={handleCounter} />
    </>
  );
}

export default App;
