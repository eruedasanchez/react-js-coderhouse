import './App.css';
import Card from './components/Card/Card';
import Usuario from './components/Usuario/Usuario';
import UsuarioDestructuring from './components/UsuarioDestructuring/UsuarioDestructuring';


function App() {
  return (
    <div className='App'>
      <Usuario nombre="Eze" edad={24} profesion="Frontend Developer"/>
      <Usuario nombre="Paulita" edad={27} profesion="Backend Developer"/>
      <UsuarioDestructuring nombre="Rodrigo" edad={23} profesion="Empresario"/>
      <Card/>
    </div>
  );
}

export default App;


// Consideraciones al pasar props

// * Si quiero pasar un string, lo paso como ""
// * Si quiero pasar un entero, lo paso como {24}
// * Si quiero pasar un array, lo paso como {[]}
// * Si quiero pasar un objeto, lo paso como {{nombre del objeto}}