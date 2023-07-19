import { useState } from "react";

const Text = () => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <h2>Hello world!</h2>}
        </div>
    )
}

export default Text;