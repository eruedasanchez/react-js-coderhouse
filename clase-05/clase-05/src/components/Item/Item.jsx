import React from 'react'

const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.img} alt={producto.name}/>
            <h2>{producto.name}</h2>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
        </div>
    )
}

export default Item;