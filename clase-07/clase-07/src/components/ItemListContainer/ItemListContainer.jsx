import {useState, useEffect} from 'react';
import { pedirProductos } from '../functions/pedirProductos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);         
        })
    }, [])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;


/* Observaciones */

// Al tener declarada la variable let productos = [], en React no puedo llamarlo al id del primer producto como <h1>{productos[0].id}</h1>.
// Para ello, debo usar el hook useState();


/*
pedirProductos()
    .then((res) => {
        // productos = res;        // se le asigna a productos el resultado de resolver la promesa, es decir, data (vesion sin useState)
        setProductos(res);         // version con useState
    })

En este caso, estoy llamando a una promesa infinitas veces porque cada vez que se actualize el componente, se va a volver
a llamar generando un loop infinito.

*/


/* 

    {(productos.length > 0) && productos[0].name}</h1>  
        {/* // agrego (productos.length > 0) porque inicialmente el arreglo esta vacio. Cuando se carguen los productos, no se encuentra mas vacio y se puede mostrar el nombre del producto */