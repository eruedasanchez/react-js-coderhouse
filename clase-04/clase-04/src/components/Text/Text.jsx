import { useState } from "react";
import TextUseEffect from "../TextUseEffect/TextUseEffect";

const Text = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    
    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <TextUseEffect/>}
        </div>
    )
}

export default Text;

