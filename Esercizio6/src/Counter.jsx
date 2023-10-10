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