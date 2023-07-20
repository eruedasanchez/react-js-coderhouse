import React from 'react'

const Item = ({producto}) => {
    return ( 
        <div className='producto'>
            <img src={producto.img} alt={producto.name}/>
            <div>
                <h4>{producto.name}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoria: {producto.category}</p>
                <a className='ver-mas' href={`/item/${producto.id}`}>Ver mas</a>
            </div>
        </div>
    )
}

export default Item;