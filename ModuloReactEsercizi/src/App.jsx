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

/*Se utilizziamo una JSX expression invece di una stringa 
verrà ugualmente renderizzata a schermo come elemento HTML*/
