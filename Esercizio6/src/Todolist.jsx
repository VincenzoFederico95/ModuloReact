import { useRef, useState } from "react";

export function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  function handleButton() {
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = "";
  }

  function handleResetButton() {
    setItems([]);
  }

  function handleRemoveButton(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveButton(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}>To do</button>
      <button onClick={handleResetButton}>Reset</button>
    </>
  );
}