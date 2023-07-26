import React, { useEffect, useState } from 'react'

const HelloWorld = () => {

    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value); 
    }

    useEffect(() => {
        console.log("Componente montado!");
    }, [text]);
    
    return (
        <div>
            <input type='text' onChange={handleText}/> 
            <h2>{text}</h2>
        </div>
    )
}

export default HelloWorld;

/* Observaciones */

// onChange: Se utiliza cuando se produce un cambio 

/* Use effect */

// Primer caso

// const HelloWorld = () => {

//     const [text, setText] = useState("");

//     const handleText = (event) => {
        // 1)
    //     setText(event.target.value); // se lo asignamos a setText
    // }

    // Ahora, agrego la siguiente linea 
    // console.log("Hello world!");
    // 2)  
    
//     return (
//         <div>
//             <input type='text' onChange={handleText}/> 
//             <h2>{text}</h2>
//         </div>
//     )
// }

// export default HelloWorld;

// 1) Como estamos utilizando el evento onChange, sabemos que obtenemos por defecto el parametro evento (en este caso event)
// y desde event, podemos acceder a su valor con event.target.value

// 2) Entonces, observamos que cada vez que renderizamos el componente, se ejecuta toda la logica
// y se muestra el console.log("Hello world!")
// Inclusive, tambien se ejecuta el console.log cuando actualizamos el input ingresado. 
// Esto es asi porque el console.log se ejecuta cuando montamos el componente pero tambien
// cuando se actualiza. Tambien podemos decidir que sucede con el console.log cuando el componente
// se desmonta. Para ello, utilizamos useEffect.

/* Segundo caso */

// const HelloWorld = () => {

//     const [text, setText] = useState("");

//     const handleText = (event) => {
//         setText(event.target.value); 
//     }

//     useEffect(() => {}, )
    
//     console.log("Hello world!");
    
//     return (
//         <div>
//             <input type='text' onChange={handleText}/> 
//             <h2>{text}</h2>
//         </div>
//     )
// }

// export default HelloWorld;

// 1) useEffect recibe dos parametros. El primero es una funcion anonima que contiene lo queremos
// ejecutar y el segundo es un array

// Si no le colocamos el segundo parametro

// useEffect(() => {
//     console.log("Componente montado!");
// }, )

// Se ejecuta el console.log tanto cuando se monta como cuando se actualiza el valor

// Ahora, si agregamos como segundo parametro un array vacio, el console.log se va a ejecutar unicamente
// cuando el componente se monte 

// useEffect(() => {
//     console.log("Componente montado!");
// }, []);


// Finalmente, si agregamos un return indicamos que es lo que se va a ejecutar cuando el componente se desmonta 

// useEffect(() => {
//     console.log("Componente montado!");

//     return () => {
//         console.log("Componente desmontado!")
//     }
// }, []);



// Por ulitimo, si se le agrega un parametro al arreglo, estamos indicando que en el cambio de ese elemento tambien
// se ejecuta el contenido del useEffect (en este caso, el console.log(...))

// useEffect(() => {
//     console.log("Componente montado!");
// }, [text]);

// Si dejo el return, tambien se va a ejecutar cuando se actualice el input porque se encuentra dentro de la funcion
// anonima
