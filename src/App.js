import './App.css';
import { useState } from "react"
import Nappain from './Nappain';

const operaattorit = ["/", "+", "-", "*", "CLEAR", "DEL"]
const nappaimet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "="]

function App() {
  const [laskuKentta, setLaskuKentta] = useState('0')
  const [tulosKentta, setTulosKentta] = useState('0')

  const handleClick = (nappain) => {
    if (laskuKentta === '0' && !operaattorit.includes(nappain) && nappain !== "." && nappain !== "=") {
      setLaskuKentta(nappain)
      setTulosKentta(nappain)
      return
    } else if (nappain === "DEL") {
      if (laskuKentta.length === 1) {
        setLaskuKentta('0')
        setTulosKentta('0')
        return
      }
      setLaskuKentta(laskuKentta.substring(0, laskuKentta.length - 1))
      setTulosKentta(eval(laskuKentta.substring(0, laskuKentta.length - 1)))
      return
    } else if (nappain === "CLEAR") {
      setLaskuKentta('0')
      setTulosKentta('0')
      return
    } else if (nappain === "=") {
      setLaskuKentta(tulosKentta)
      return
    }

    setLaskuKentta(laskuKentta + nappain)
    setTulosKentta(eval(laskuKentta + nappain))
  }

  return (
    <div>
      <div className='laskin'>
        <div className='tekstiKenttä'>
          <p className='tulosKentta'>({tulosKentta})</p> <p className='laskuKentta'>{laskuKentta}</p>
        </div>
        <div className='operaattorit'>
          {operaattorit.map(operaattori => <Nappain handleClick={handleClick} tyyppi={"operaattori"} key={operaattorit.indexOf(operaattori)} nappain={operaattori} />)}
        </div>
        <div className='nappaimet'>
          {nappaimet.map(nappain => <Nappain handleClick={handleClick} tyyppi={"nappain"} key={nappaimet.indexOf(nappain)} nappain={nappain} />)}
        </div>
      </div>
    </div>
  );
}

export default App;