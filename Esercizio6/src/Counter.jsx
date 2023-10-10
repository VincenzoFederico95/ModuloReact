import { useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ counter, incrementCounter, decrementCounter, reset}) {
  useEffect(()=>{ console.log(counter)}, [counter])
    return (
      <div>
        <CounterDisplay count={counter} />
        <button onClick={incrementCounter}>Increment the number </button>
        <button onClick={decrementCounter}>Decrement the number </button>
        <button onClick={reset}> Reset </button>
      </div>
    );
  }