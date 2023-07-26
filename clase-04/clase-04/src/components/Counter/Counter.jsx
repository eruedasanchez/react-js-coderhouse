import React, { useState } from 'react'

const Counter = () => {
    // number es el nombre de la variable que vamos a modificar y como la definimos en un estado, va a cambiar de valor
    // y cuando la variable cambia de estado/valor, el componente donde esta declarado el estado (en este caso Counter) se
    // vuelve a renderizar. Para ello, vamos a utilizar la funcion setNumber para cambiar el estado.
    // Adentro de los parentesis de useState, se coloca el valor inicial de la variable del estado (en este caso 0)   
    const [number, setNumber] = useState(0);   

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }


    return (
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr/>
        </div>
    )
}

export default Counter;

/* Observaciones */

// Al dejar solo la funcion y el siguiente return:

// const Counter = () => {
//     let number = 0;

//     const sumar = () => {
//         number = number + 1;
//     }


//     return (
//         <div>
//             <h2>{number}</h2>
//             <button onClick={sumar}>Sumar</button>
//         </div>
//     )
// }

// export default Counter;

// sumar() funciona perfectamente pero cuando clickeo no se actualiza el valor de number porque necesito
// actualizar su estado en la app. Esto lo realizo con los estados, es decir, variables que al cambiar de valor van a forzar al 
// componente a actualizarse, a volver a renderizarse en la pantalla   



