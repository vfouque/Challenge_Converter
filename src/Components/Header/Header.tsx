import './Header.scss'

interface HeaderProps {
  amount: number;
  setAmount: any;
  displayCurrencies:any;
  setDisplayCurrencies: any;
}

export default function Header({amount, setAmount, setDisplayCurrencies, displayCurrencies}: HeaderProps) {

  return (
    <div className='header'>
      <h1>Converter</h1>
      <input className='initialCurrency'
        type="number"
        onChange={(event) => setAmount(event.target.value)}
        value={amount} />
        {/* créer un 2eme input, on y récupère la value et on la compare avec la methode  */}
      {amount > 1 ? <p>euros</p> : <p>euro</p>}
      <button onClick={() => setDisplayCurrencies((prevState) => !prevState)}>
        {displayCurrencies ? "MASQUER LA LISTE" : "AFFICHER LA LISTE"}
      </button>
    </div>
  )
}
