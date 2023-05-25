import { useState } from 'react'

import './App.css'

function App() {

  const [value1, setValue1] = useState();
  const [value2, setvalue2] = useState();
  const [suma, setSuma] = useState()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuma(parseFloat(value1) +parseFloat( value2))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>digito 1  </label>
      <input name="valor1" type="number" onChange={event => setValue1(event.target.value)}/>
      <label>digito 2  </label>
      <input name="valor2" type="number" onChange={event => setvalue2(event.target.value)}/>

      <input type="submit" value="sumar" />

      <label> resultado : <span>{suma}</span></label>
    </form>
  )
}

export default App
