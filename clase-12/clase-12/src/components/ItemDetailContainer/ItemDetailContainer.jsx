import { useEffect, useState} from "react";
// import { pedirItemPorId } from "../functions/pedirProductos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'; // con doc vamos a acceder a la informacion del producto y con getDoc vamos a hacer el pedido al producto en particular
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; // useParams() le asigna a la variable id un objeto que tiene todas los valores de cada uno de los parametros dinamicos de la url (en este caso, solo tenemos el id (por eso, solicitamos useParams().id) y retorna el id de la ruta que se pasa)
    
    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((resp) => {
            setItem(
                {...resp.data(), id: resp.id}
            );
        })

        // APLICAMOS FIREBASE, NO USAMOS MAS pedirItemPorId 
        // pedirItemPorId(parseInt(id)) // se parsea a entero el id porque useParams lo retorna siempre como un string
        // .then((res) => {
        //     setItem(res);         
        // })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;