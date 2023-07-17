import './App.scss'

import data from '../data/currencies.js'


import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Result from './Components/Result/Result'

import { useState } from 'react'



function App() {
  const [displayCurrencies, setDisplayCurrencies] = useState(true)
  const [amount, setAmount] = useState(1)
  const [idCurrency, setIdCurrency] = useState(3)


  const handleClick = (idCurrency) => {
    setIdCurrency(idCurrency)
  }


  return (
    <div className="wrapper">
      <Header
        amount={amount}
        setAmount={setAmount}
        displayCurrencies={displayCurrencies}
        setDisplayCurrencies={setDisplayCurrencies}
      />
      {displayCurrencies && <Main currenciesList={data} onClick={handleClick} />}
      <Result amount={amount} currency={data[idCurrency]} />
    </div>
  )
}


export default App
