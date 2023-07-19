import './App.css';

function App() {
  const saludo = "Hello world!";
  const segundoSaludo = <h1>Hello world!!</h1>;
  const edad = <p>24</p>;
  const mail = <p>ezequiel.ruedasanchez@gmail.com</p>;
  const usuario = <div> {saludo} {edad} {mail} </div>
  
  return (
    <>
      <div className="App">
        <h1>{saludo}</h1>
        {segundoSaludo}
        {edad}
        {mail}
      </div>
      <p>o tambien podemos encerrarlos en un div como mostramos a continuacion</p>
      <div className="App">
        {edad}
        {mail}
      </div>
      <p>Por ultimo, lo podemos mostrar todo comprimido en la variable usuario</p>
      <div className="App">
        {usuario}
      </div>
      <MostrarSaludoComponente/>
    </>
    );
}

// Introduccion a componentes

const MostrarSaludoComponente = () => {
  return <h1>Hello amigos. Estamos mostrando un componente!</h1>
}

export default App;
