import './main.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito'
// import { useState } from 'react'; no lo uso mas
import {CartProvider} from './context/CartContext'; // dejo de importar CartContext porque no lo uso mas


function App() {
  
  return (
    <div>
      {/* <CartContext.Provider value={{user, edad}}>  */}
      {/* // ahora el valor user va a poder ser accedido por cualquier componente de los que se encuentran debajo, es decir, que este encerrado por el provider 
      con value solo puedo pasar una propiedad, si quiero pasar mas de una, lo paso como objeto
      Ahora que quedo claro el funcionamiento, paso el carrito que es lo que voy a querer usar */}
      {/* <CartContext.Provider value={{carrito, setCarrito}}>  */}
      {/* // cambiamos nuevamente los parametros */}
      {/* <CartContext.Provider value={{carrito, agregarAlCarrito}}> */}
      {/* // agregamos la cantidad al cartContext.Provider */}
      {/* <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}> */}
      <CartProvider>
        {/* todos los elementos que se encuentran debajo del cart provider funcionan como children */}
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
