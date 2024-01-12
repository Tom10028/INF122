import Evento from './components/Evento.js'
import EventoB from './components/EventoB.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app'>
        <Evento/>
        <EventoB 
          image="evento1"
          title="pu Pizza 03-PyPuzzle"
          dateLiteral="Mr Pizza, 20 de Octubre Frente la plaza avaroa"
          placeLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
          description="Holaaaaa" />
      </div>

    </div>
  );
}

export default App;
