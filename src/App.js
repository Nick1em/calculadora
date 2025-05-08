import { useEffect, useState } from 'react';

function App() {
 const [input1,setInput1] = useState(0);
 const [input2,setImput2] = useState(0);
 const [operacao,setOperacao] = useState('+')
 const [resultado,setResultado] = useState(0)

 const calcular = () => {
  if (operacao == "+")
    return parseFloat(input1) + parseFloat(input2);
  else if (operacao == "-")
    return parseFloat(input1) - parseFloat(input2);
  else if (operacao == "x")
    return parseFloat(input1) * parseFloat(input2);  
  else 
    return parseFloat(input1) / parseFloat(input2)
 }

 useEffect (() => {
  setResultado (calcular());
 }, [input1,input2, operacao]);

  return (
    <div className="App">
      <h1> Calculadora</h1>
      <input type='number'
      onChange={(e) => setInput1(e.target.value)} 
      value={input1} placeholder='Digite um número!'></input>

      <select onChange={(e) => setOperacao(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>x</option>
        <option>/</option>
      </select>

      <input type='number'
      onChange={(e) => setImput2(e.target.value)} 
      value={input2} placeholder='Digite um número!'></input>
      
      <label>Resultato {resultado}</label>
      
    </div>
  );
}

export default App;