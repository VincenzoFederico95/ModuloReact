import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld"
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message"
import { MouseClicker } from "./Mouseclicker";
import { MultiButton } from "./Multibutton";
import { Welcome } from "./Welcome"
import { useState } from "react";


function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
  const [counter, setCounter] = useState(0)
    function handleCounter() {
        setCounter (counter +1 )
    }
    function decrementCounter() {
      setCounter (counter - 1 )
  }
  function reset() {
      setCounter (0)
  }

  return (
    <>
      <Hello />
      <Message />
      <Welcome name={<strong>John</strong>} age={44} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter counter={counter} incrementCounter={incrementCounter} decrementCounter={decrementCounter}  reset = {reset}/>
      <Clock/>
      <MouseClicker name={"one"}/>
      <MultiButton nameOne="one" nameTwo ="two"  nameThree = "three"/>
      <InteractiveWelcome/>
     </>

  );
}

export default App;




