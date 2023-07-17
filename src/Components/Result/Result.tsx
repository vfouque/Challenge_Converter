
import { CurrencyInterface } from "../main/Main";
import './Result.scss'

interface ResultProps {
  currency: CurrencyInterface;
  amount: number;
}

export default function Result({ amount, currency }: ResultProps) {
  return (
    <footer>
      <h2 className="result">{(amount * currency.rate).toFixed(2)}</h2>
      <p className="currency">{currency.name}</p>
    </footer>
  )
}
