function App() {

  function creaNome(){
    return <h1>Hello, {name}</h1>
  }

  return (
    <>
    {creaNome("Vincenzo")}
    </>
  )
}

export default App

/*Come possiamo vedere eseguendo il codice, togliendo il parametro 
"nome" dalla funzione non visualizziamo più la variabile a schermo e quindi l'elemento è incompleto
