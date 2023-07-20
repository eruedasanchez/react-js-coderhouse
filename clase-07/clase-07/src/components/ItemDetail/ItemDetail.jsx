
const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.img} alt={item.name}/>
                <div>
                    <h3 className="titulo">{item.name}</h3>
                    <p className="descripcion">{item.description}</p>
                    <p className="categoria">Categoria: {item.category}</p>
                    <p className="precio">${item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;