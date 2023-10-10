export function MouseClicker({ name }) {
    function handleClick(e) {
        console.log(e.currentTarget.name);
    }
    function handleImg(e) {
        console.log(e.target.src)
    }
    return (
      <button name={name} onClick={handleClick}>
        <img onClick={handleImg} name = "image" src="https://www.perlesandco.it/images/product/1/3/1/131731_moyen/im-Bottone-rotondo-2-fori-cucito-camicia-11-mm-nero-x1-.jpg"  width={50} height={50} />
      </button>
    );
  }

 /* Per farlo, si può utilizzare la proprietà dell'evento CurrentTarget, che consente di individuare l'elemento a cui è collegato il gestore di eventi */