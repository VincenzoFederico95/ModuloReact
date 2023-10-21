mport { useRef, useState } from "react";

export function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  function handleButton() {
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = " ";
  }
  
  function handleResetButton() {
    setItems([])
  }
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}> To do </button>
      <button onClick={handleResetButton}>Reset</button>
    </>
  );
}