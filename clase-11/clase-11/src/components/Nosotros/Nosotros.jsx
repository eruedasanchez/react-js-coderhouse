import React from 'react'
import { useEffect } from 'react';

const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }
        
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])
    
    return (
        <div className='container'>
            <h1 className='main-title'>Nosotros</h1>
            <p>Este es el componente nosotros!</p>
        </div>
    )
}

export default Nosotros;

// Observaciones 

/* Cada que monto el componente se carga la function

window.addEventListener("click", () => {
    console.log("click");
})

Por lo tanto, si estoy en la categoria nosotros y
hago un click, voy sumando de a uno. Luego, si paso
a la categoria trendy por ej, continua sumando de a uno.
Pero si de trendy vuelvo a nosotros, el contador suma de a dos 
porque monta el componente nuevamente y suma un click por el componente 
cargado mas uno por el click que se realiza.

Es decir, el contandor va a ir sumando de a "n" unidades
si voy a cualquier categoria y vuelvo a nosotros n veces.

Para ello, colocamos un useEffect para que solo cuente cuando se monta y no cuando se actualiza.
Es decir:

useEffect(() => {
        window.addEventListener("click", () => {
            console.log("click");
        })
    }, [])

    Sin embargo, sigo sin solucionar el problema porque solo estamos previniendo de ejecutar el contador 
    cuando se actualiza pero no cuando se monta. Para solucionar esto, queremos que cuando el componente se desmonta
    se elimine el addEventListener. Para ello, hacemos un return (se ejecuta cuando el componente se desmonta)
    con la siguiente funcion:

    return () => {
        window.removeEventListener("click", () => {
            console.log("click");
        })
    }

    Sin embargo, al navegar entre categorias y volver a nosotros, el contador sigue sumando de acuerdo a la
    cantidad de veces que hayamos entrado en nosotros porque necesitamos llamar a la misma funcion y no lo
    estamos haciendo. Para ello, la agregamos por referencia de la siguiente manera:

    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }
        
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])
    
    De esta manera, el contador de click solo se actualiza cuando clickeamos en nosotros obteniendo el 
    resultado que queriamos.
    
*/

