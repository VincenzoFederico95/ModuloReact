import { Helloworld } from "./Helloworld"
import { Message } from "./Message"
import { Welcome } from "./Welcome"


function App() {
  

  return (
    <>
    <Helloworld/>
    <Message/>
    <Welcome name="Vicio"/>
    </>
  )
}

export default App

/* posso renderizzare il componente message direttamente dentro app e verrà visualizzato allo stesso modo correttamente, in più potrà essere riutilizzato in più parti dell'app */


