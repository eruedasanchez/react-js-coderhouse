import { useEffect, useState} from "react";
import { pedirItemPorId } from "../functions/pedirProductos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id; // useParams() le asigna a la variable id un objeto que tiene todas los valores de cada uno de los parametros dinamicos de la url (en este caso, solo tenemos el id (por eso, solicitamos useParams().id) y retorna el id de la ruta que se pasa)
    
    useEffect(() => {
        pedirItemPorId(parseInt(id)) // se parsea a entero el id porque useParams lo retorna siempre como un string
        .then((res) => {
            setItem(res);         
        })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;