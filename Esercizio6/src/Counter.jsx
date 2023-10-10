import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(9)
    function handleCounter() {
        setCounter (counter +1 )
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleCounter}>Increment the number </button>
        </div>
    )
}

/* il parametro setter deve essere una callback dato che la funzione potrebbe essere asincrona e quindi non aggiornarsi nel modo corretto */