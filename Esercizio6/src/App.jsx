import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Helloworld } from "./Helloworld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./Mouseclicker";
import { MultiButton } from "./Multibutton";
import { Welcome } from "./Welcome";
import { useState } from "react";
import { Focusableinputs } from "./Focusableinput";
import { Colors } from "./Color";
import { ToDoList } from "./Todolist";
import { Container } from "./Container";
import GithubUsersList from "./GithubUsersList";
import CurrentLocation from "./CurrentLocation";

function App() {
  function handleButtonClick() {
    const time = new Date();
    alert(`The current time is: ${time.toLocaleTimeString()}`);
  }
  const [counter, setCounter] = useState(0);
  function handleCounter() {
    setCounter(counter + 1);
  }
  function decrementCounter() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }

  function handleLogin(data) {
    console.log("The user data are: ", data);
  }

  const [language, setLanguage] = useState("en");

  function handleLanguageSelection(language) {
    setLanguage(language);
  }


  return (
    <>
      <Container title={<h1> This is my awesome container </h1>}></Container>
      <Helloworld />
      <Message />
      <Welcome name={<strong>John</strong>} age={44} />
      <AlertClock buttonClicked={handleButtonClick} />
      <Counter
        counter={counter}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
        reset={reset}
      />
      <select
        onChange={() => handleLanguageSelection("IT")}
        name="language"
        id="language"
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>

      <Clock />

      <MouseClicker name={"one"} />
      <MultiButton nameOne="one" nameTwo="two" nameThree="three" />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <Focusableinputs />
      <Colors
        items={[
          {
            id: 1,
            name: "VicIo",
          },
          {
            id: 2,
            name: "Fede",
          },
          {
            id: 3,
            name: "Giulio",
          },
          {
            id: 4,
            name: " Luca",
          },
        ]}
      />
      <ToDoList />
      <Container />
      <GithubUsersList />
      
    </>
  );
}

export default App;
