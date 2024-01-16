import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import Boton2 from './components/Boton2';
function App() {
  const[nroClicks, setNumClicks]=useState(0);
  const[show,setShow]=useState(true);
  const resta3 = ()=>{
    console.log("click");
    setNumClicks(nroClicks-3);
  }
  const suma3=()=>{
    console.log("Reiniciar");
    setNumClicks(nroClicks+3);
  }
  const resta1=()=>{
    console.log("Reiniciar");
    setNumClicks(nroClicks-1);
  }
  const suma1=()=>{
    console.log("Reiniciar");
    setNumClicks(nroClicks+1);
  }
  const reiniciar=()=>{
    console.log("Reiniciar");
    setNumClicks(0);
  }
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks} mostrar={show}/>
        <div className='contenedor-botones'>
          <Boton texto="-3" esBotonClick={true} funcionClick={resta3} />
          <Boton texto="+3" esBotonClick={false} funcionClick={suma3} />
          <Boton texto="-1" esBotonClick={true} funcionClick={resta1} />
          <Boton texto="+1" esBotonClick={true} funcionClick={suma1} />
          <Boton texto="reiniciar" esBotonClick={true} funcionClick={reiniciar}  className="botonlargo" />
          <Boton2 texto="mostrar" esBotonClick={true} funcionClick={mostrar}/>
        </div> 

      </div>
    </div>
  );
}

export default App;
