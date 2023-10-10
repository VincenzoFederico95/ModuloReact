import { CounterDisplay } from "./CounterDisplay";

export function Counter({counter, handleCounter}) {
    return (
        <div>
            <CounterDisplay count = {counter} />
            <button onClick={handleCounter}>Increment the number </button>
        </div>
    )
}