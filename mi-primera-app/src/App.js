import Evento from './components/Evento.js'
import EventoB from './components/EventoB.js';
import EventoC from `./components/EventoC.js`
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

        <EventoC title="MeetUp 11-3 pitfalls de la inge"
          dateLiteral="25 de noviembre de 2023"
          placeLiteral="Online"
          description={["Hola pythonista",
                        "Acompananos al MeetUp mensual de la comunidad",
                        "En este MeetUP tendriamod la participacion",
                        "Anteriormente Co-organizadoras de Pyladies"]} />  
      </div>

    </div>
  );
}

export default App;
