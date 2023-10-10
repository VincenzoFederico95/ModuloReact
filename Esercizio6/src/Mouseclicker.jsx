export function MouseClicker({name}) {
    function handleClick(e) { console.log(e.target.name) }
    return (
        <button name = {name} onClick={handleClick}>  </button>
    )
}