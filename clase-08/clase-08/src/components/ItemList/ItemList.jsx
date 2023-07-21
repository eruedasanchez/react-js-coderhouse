import Item from '../Item/Item';

const ItemList = ({productos, titulo}) => {
    return (
        <div className="container">
            <h2 className='main-title'>{titulo}</h2>
            <div className="productos">
                {
                    productos.length > 0 &&
                    // mapeo de los productos
                    productos.map((producto) => {
                        return(
                            <Item key={producto.id} producto={producto}/>
                        )
                    }) 
                }
            </div>
                
        </div>
    )
}

export default ItemList;