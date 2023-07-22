import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore"; // addDoc nos permite agregar un documento
import { db } from "../../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
    
    const {register, handleSubmit} = useForm();

    const comprar = (data) => {
        const pedido = {cliente: data, productos: carrito, total: precioTotal()};
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido) // subimos el pedido a la coleccion pedidos
        .then((doc) => {
            setPedidoId(doc.id); // se obtiene el id de la compra y se lo puedo pasar al cliente
            vaciarCarrito(); // cuando clickea en comprar, se vacia el carrito
        })
    }

    if(pedidoId){
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
                <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
                <button type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout;