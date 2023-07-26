import { useState } from 'react';
import HelloWorld from '../HelloWorld/HelloWorld'; 

const Text = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }



    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <HelloWorld/>}
            {/* // Observemos que aplicando {show && <h2>Hello world!</h2>} es la forma de agregar JS al archivo */}
        </div>
    )
}

export default Text;