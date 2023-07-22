import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return ( 
        <div className='producto'>
            <img src={producto.img} alt={producto.name}/>
            <div>
                <h4>{producto.name}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoria: {producto.category}</p>
                <Link className='ver-mas' to={`/item/${producto.id}`}>Ver mas</Link>
            </div>
        </div>
    )
}

export default Item;