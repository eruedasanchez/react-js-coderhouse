import {createContext, useEffect, useState} from "react";

export const CartContext = createContext(); 

// creamos localStorage para que cuando actualicemos la pagina, el carrito no se quede vacio
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []; // carritoInicial devuelve lo que hay en el localStorage guardado o un array vacio si no hay nada guardado 

// centralizar todo el contexto

export const CartProvider = ({children}) => {

    // lo declaro aca porque quiero usarlo en cualquier componente (estado global)
//   const [carrito, setCarrito] = useState([]); // se inicializa con un array vacio porque en el carrito se van a ir cargando los productos y este inicialmente, esta vacio
  // trasladamos handleAgregar aca porque es una funcion relacionada al carrito o al contexto y le cambiamos el nombre
    const [carrito, setCarrito] = useState(carritoInicial); // modificacion hecha al agregar el local Storage 
  

    const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}; 

    // creamos una nueva variable porque los estados solo los podemos setear con setCarrito no podemos con push o find
    const nuevoCarrito = [...carrito]; // a este nuevo carrito si lo podemos modificar como queramos

    // agregar el producto al carrito o actualizar su cantidad 
    const estaEnCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

    if(estaEnCarrito){
        estaEnCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito); // se agrega el item al carrito
    
    // console.log({...item, quantity: cantidad}); // {...item, quantity: cantidad} agrega al objeto item la propiedad que llamo quantity para poder acceder a la cantidad de productos que desea comprar
    // setCarrito([...carrito, itemAgregado]); // se agrega el item al carrito
    }

  // const user = "Parci";
  // const edad = 24;
   const cantidadEnCarrito = () => {
    return carrito.reduce((acc,prod) => acc + prod.cantidad, 0); // cantidad total de productos agregados al carrito
    }

  const precioTotal = () => {
    return carrito.reduce((acc,prod) => acc + prod.price * prod.cantidad, 0); // cantidad total de productos agregados al carrito   
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  // como queremos que cada vez que carrito cambia, se actualice, es un estado y por lo tanto, podemos utilizar un useEffect

  useEffect(() => {localStorage.setItem("carrito", JSON.stringify((carrito)));}, [carrito])

  return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    ) 
} 