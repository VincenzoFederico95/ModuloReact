export function MouseClicker({ name }) {
    function handleClick(e) {
      console.log(e.target.name);
    }
    return (
      <button name={name} onClick={handleClick}>
        <img onClick={handleImg} name = "image" src="https://www.perlesandco.it/images/product/1/3/1/131731_moyen/im-Bottone-rotondo-2-fori-cucito-camicia-11-mm-nero-x1-.jpg"  width={50} height={50} />
      </button>
    );
  }

 /* si, il nome viene comunque stampato in console graie all'evento collegato al pulsante, tuttavia verrà attivato dall'immagine */