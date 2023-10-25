export function Counter({counter, handleCounter}) {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleCounter}>Increment the number </button>
        </div>
    )
}
