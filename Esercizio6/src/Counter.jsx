import { useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useRef } from "react";

export function Counter({
  counter,
  incrementCounter,
  decrementCounter,
  reset,
}) {
  const counterRef = useRef();
  useEffect(() => {
    console.log(counterRef.current.textContent);
  }, [counter]);

  return (
    <div>
      <CounterDisplay counterRef={counterRef} count={counter} />
      <button onClick={incrementCounter}>Increment the number </button>
      <button onClick={decrementCounter}>Decrement the number </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}