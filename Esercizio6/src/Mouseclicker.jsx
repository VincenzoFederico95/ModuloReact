export function MouseClicker({ name }) {
  function handleClick(e) {
    console.log(e.target.name);
    }
    
    function handleImg(e) {
        console.log(e.target.src)
    }
  return (
    <button name={name} onClick={handleClick}>
      <img onClick={handleImg} name = "image" src="https://www.educolor.it/immagine-bottone-dl28074.jpg" width={50} height={50} />
    </button>
  );
}

/* si, il nome viene comunque stampato in console graie all'evento collegato al pulsante, tuttavia verrà attivato dall'immagine */
