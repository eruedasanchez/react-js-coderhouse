import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [number, setNumber] = useState(0); 
    // el primer parametro del arreglo en un useState es una variable y el segundo una funcion. 
    //La variable es la que va a cambiar de estado para que cuando sea utlizada se vuelva a renderizar 
    // el componente cuando la variable sufra algun cambio
    // La funcion es con la cual vamos a cambiar el estado 

    const sumar = () => {
        setNumber(number + 1); // se cambia el estado de la variable number (inicialmente en 0 al valor 15)
    }

    const restar = () => {
        setNumber(number - 1); // se cambia el estado de la variable number (inicialmente en 0 al valor 15)
    }

    return (
        <div>
            <p className="background">{number}</p>
            <button onClick={restar}>Restar</button>
            <button onClick={sumar}>Sumar</button>
            <hr/>
        </div>
    )
}

export default Counter;

// Para actualizar las variables, vamos a utilizar los estados. Los estados van a ser variables que al
// cambiar de valor, van a forzar al componente a actualizarse (a volver a renderizarse en la pantalla) 