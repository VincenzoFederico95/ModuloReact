function App() {

  function creaNome(name){
    return <h1>Hello, {name}</h1>
  }

  return (
    <>
    {creaNome("Vincenzo")}
    </>
  )
}

export default App
