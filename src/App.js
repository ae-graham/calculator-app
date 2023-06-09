import {useState, useRef} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  //const resultRef = useRef(null); 
  const [result, setResult] = useState(0);
  
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); //Number() -> creates a number from a string for example. Here we are adding the result state and the value the user enters, hence why we need to reference the value of the input field.
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((result) => result * 0);
    if (isNaN(result)) {
      setResult(0)
    } else {}
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simple Calculator</h1> 
      </div> 
      <form> 
        <p>Result: {result}</p>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder= "Type a number" 
        /> 
        <div className="button_area">
          <button onClick={plus}>&#43;</button> 
          <button onClick={minus}>&#8722;</button>  
          <button onClick={times}>&#215;</button>  
          <button onClick={divide}>&#247;</button> 
          <button id="resetIn" onClick={resetInput}>C</button> 
          <button id="resetRe" onClick={resetResult}>AC</button>
        </div>
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
