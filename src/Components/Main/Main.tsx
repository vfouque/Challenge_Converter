import './Main.scss';

interface MainProps {
  currenciesList: CurrencyInterface[];
  onClick: any;
  idCurrency:number;
}
export interface CurrencyInterface {
  name: string;
  rate: number;
}

export default function Main({ currenciesList, onClick }: MainProps) {  
  

  return (
    <div className="currencies">
      <h3>Currencies</h3>
      <ul className="listCurrencies">
        {currenciesList.map((c: CurrencyInterface, index) => (
          <li onClick={() => onClick(index)} key={c.name}>
            <span >
           {c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
