import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import './main.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer itemId={6}/>
    </div>
  );
}

export default App;
