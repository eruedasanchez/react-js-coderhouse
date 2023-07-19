import {useState, useEffect} from "react";

const TextUseEffect = () => {
    const [text, setText] = useState("");

    const handleText = (event) => {
        // cada que hacemos un cambio en el input, se produce un evento (event) que es lo que pasamos por parametro
        setText(event.target.value); // event.target.value muestra el valor ingresado en el input
    }

    useEffect(() => {
        console.log("Componente Montado!");
    }, [text]);
    
    return (
        <div>
            <input type="text" onChange={handleText}/>
            <h2>{text}</h2>
        </div>
    )
}

export default TextUseEffect;

/* Observaciones */

/* Observemos que cada vez que montamos (mount) el componente TextUseEffect (ocuure cuando se clickea en mostrar) 
se imprime "Hello world" en la consola. Al ingresar texto por consola por el input tmb se muestra por consola Hello world 
porque el componente se ejecuta tanto en el montaje como en su actualizacion. 
Por lo tanto, con useEffect podemos decidir que componente o parte se ejecuta al montar, actualizar o desmontar  
*/

/* useEffect: el primer parametro es una funcion anonima que vamos a ejecutar y el segundo parametro es un array 

useEffect(() => {console.log("Componente Montado!");}); se ejecuta el console.log cuando se monta y se actualiza 
useEffect(() => {console.log("Componente Montado!");}, []); se ejecuta el console.log cuando se monta pero no cuando se actualiza 

useEffect(() => {
        console.log("Componente Montado!");
        return () => {
            console.log("Componente Desmontado!");
        }
    }, []);

se ejecuta el Componente Montado! unicamente cuando se monta y Componente Desmontado! cuando se desmonta

useEffect(() => {
        console.log("Componente Montado!");
    }, [text]);

se ejecuta Componente Montado! cuando se monta y cuando se actualiza el valor de text tambien, es decir, cuando escribimos sobre el input

*/