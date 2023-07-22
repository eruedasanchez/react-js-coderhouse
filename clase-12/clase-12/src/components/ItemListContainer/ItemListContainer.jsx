import {useState, useEffect} from 'react';
// import { pedirProductos } from '../functions/pedirProductos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'; // con collection podemos acceder a una coleccion (seria como el arreglo de productos en el json) en nuestra base de datos (db). En este caso, solo hay definida una coleccion (productos)
import {db} from '../../firebase/config';

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const category = useParams().categoria;  // paso categoria porque el parametro del enlace dinamico es '/productos/:categoria'
    const [titulo, setTitulo] = useState("Productos");

    useEffect(() => {
        // Una vez configurado firebase, quitamos la funcion pedirProductos con su respectiva promesa
        // pedirProductos()
        // .then((res) => {
        //     if(category){
        //         setProductos(res.filter(prod => prod.category === category)); 
        //         setTitulo(category);
        //     } else {
        //         setProductos(res); 
        //         setTitulo("Productos");
        //     }
        // })
        const productosRef = collection(db, "productos"); // se crea una referencia a la coleccion "productos" en particular para poder obtener su informacion

        const q = category ? query(productosRef, where("category", "==", category)) : productosRef; 
        // query como primer parametro la referencia a la coleccion que queremos filtrar y como segundo parametro, las condiciones que queremos para que esto se cumpla  
        // where nos indica que cosas queremos que chequee si coinciden con lo que vamos a buscar
        // query(productosRef, where("category", "==", category)) indica que se va a fijar en la coleccion productosRef,
        // cuales son los elementos que tenga la categoria "category" igual ("==") a category (pasada en la url con useParams) 



        // getDocs permite realizar un pedido asincronico a firestore para que nos traiga de la coleccion la informacion (documentos, productos) que esta cargada
        getDocs(q)
        .then((resp) => {
            // console.log(resp.docs[0].id);
            // console.log(resp.docs[0].data()); // con .data() accedemos a la informacion de cada producto pero nos falta obtener el id (los queremos tener juntos)
        

            // query y wear nos permiten filtrar lo que recibimos si tenemos por ej un cambio en la categoria 
            setProductos(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}   // se agrega a la data de cada producto tmb el id
                })
            )
        })
    }, [category])
    
    return (
        <div>
            <ItemList productos={productos} titulo={titulo}/>
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