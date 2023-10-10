import { AlertClock } from "./Alertclock";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld"
import { Message } from "./Message"
import { Welcome } from "./Welcome"


function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
  const [counter, setCounter] = useState(0)
    function handleCounter() {
        setCounter (counter +1 )
    }

  return (
    <>
      <Hello />
      <Message />
      <Welcome name={<strong>John</strong>} age={44} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter/>
    </>
  );
}

export default App;





  