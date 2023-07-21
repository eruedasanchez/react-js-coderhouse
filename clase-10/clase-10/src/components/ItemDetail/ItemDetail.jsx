import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleAgregar = () => {
        console.log({...item, quantity: cantidad}); // {...item, quantity: cantidad} agrega al objeto item la propiedad que llamo quantity para poder acceder a la cantidad de productos que desea comprar
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.img} alt={item.name}/>
                <div>
                    <h3 className="titulo">{item.name}</h3>
                    <p className="descripcion">{item.description}</p>
                    <p className="categoria">Categoria: {item.category}</p>
                    <p className="precio">${item.price}</p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;