import { useEffect, useState} from "react";
import { pedirItemPorId } from "../functions/pedirProductos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState(null);
    
    useEffect(() => {
        pedirItemPorId(itemId)
        .then((res) => {
            setItem(res);         
        })
    }, [])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;