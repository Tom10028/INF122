//import logo from './logo.svg';
import './App.css';
import Perfil from './components/Perfil';
import Facts from './components/Facts';
import Botones from './components/Botones';
import Tabs from './components/Tabs';
import Proyecto from './components/Proyecto';
function App() {
  return (
    <div className="main">
      <Perfil/>
      <Facts/>
      <Botones/>
      <Tabs/>
      <Proyecto/>
    </div>
  );
}

export default App;
