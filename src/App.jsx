import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[input,setInput] = useState('');

  const handleButtonClick = (val)=>{
    if(val === 'c'){
      setInput('');
    }
    else if(val === '<='){
      setInput(input.substring(0,input.length-1))
    }
    else if(val === '='){
      try{

        setInput(eval(input).toString());
      }
      catch(err){
        setInput('Error')
      }
    }
    else{
      setInput(input+val);
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>CALCULATOR</h1>
        <div className='calc'>
          <h1 id="input" >{input}</h1>
          <div className='innerCalc'>
            <button className='operator' onClick={()=> handleButtonClick('c')}>C</button>
            <button className='operator' onClick={()=> handleButtonClick('<=')}>&lt;=</button>
            <button className='operator' onClick={()=> handleButtonClick('%')}>%</button>
            <button className='operator' onClick={()=> handleButtonClick('/')}>/</button>
          </div>
          
          <div className='innerCalc'>
            <button onClick={()=> handleButtonClick('7')}>7</button>
            <button onClick={()=> handleButtonClick('8')}>8</button>
            <button onClick={()=> handleButtonClick('9')}>9</button>
            <button className='operator' onClick={()=> handleButtonClick('*')}>*</button>
          </div>
          
          <div className='innerCalc'>
            <button onClick={()=> handleButtonClick('4')}>4</button>
            <button onClick={()=> handleButtonClick('5')}>5</button>
            <button onClick={()=> handleButtonClick('6')}>6</button>
            <button className='operator' onClick={()=> handleButtonClick('-')}>-</button>
          </div>
          
          <div className='innerCalc'>
            <button onClick={()=> handleButtonClick('1')}>1</button>
            <button onClick={()=> handleButtonClick('2')}>2</button>
            <button onClick={()=> handleButtonClick('3')}>3</button>
            <button className='operator' onClick={()=> handleButtonClick('+')}>+</button>
          </div>
          
          <div className='innerCalc'>
            <button onClick={()=> handleButtonClick('0')}>0</button>
            <button onClick={()=> handleButtonClick('00')}>00</button>
            <button onClick={()=> handleButtonClick('.')}>.</button>
            <button className='orangeColor' onClick={()=> handleButtonClick('=')}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
