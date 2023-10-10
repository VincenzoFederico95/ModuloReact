import { AlertClock } from "./Alertclock";
import { Helloworld } from "./Helloworld"
import { Message } from "./Message"
import { Welcome } from "./Welcome"


function App() {
  

  return (
    <>
    <Helloworld/>
    <Message/>
    <Welcome name = {<strong>John</strong>} age={28}/>
    <AlertClock/>
    </>
  )
}

export default App;





