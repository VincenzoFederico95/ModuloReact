import { CounterDisplay } from "./CounterDisplay";

export function Counter({ counter, incrementCounter, decrementCounter, reset}) {
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Increment the number </button>
      <button onClick={decrementCounter}>Decrement the number </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}