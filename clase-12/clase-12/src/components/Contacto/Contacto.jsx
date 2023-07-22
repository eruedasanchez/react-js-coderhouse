// import { useState } from 'react';
import {useForm} from 'react-hook-form';

const Contacto = () => {

    /* Nivel 1 */

    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();  // preventDefault() evita que se haga ? al clickear submit
    //     console.log("Enviado", {nombre, email});
    // }   

    // const handleNombre = (e) => {
    //     setNombre(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // return (
    //     <div className="container">
    //         <h1 className="main-title">Contacto</h1>
    //         <form className="formulario" onSubmit={handleSubmit}>
    //             <input type="text" placeholder='Ingresa tu nombre' value={nombre} onChange={handleNombre}/>
    //             <input type="email" placeholder='Ingresa tu email' value={email} onChange={handleEmail}/>
    //             <button type='submit'>Enviar</button>
    //         </form>
    //     </div>
    // )

    // /* Nivel 2 (no crear un estado para cada input) */

    // const [valores, setValores] = useState({nombre: "", email: ""});
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();  // preventDefault() evita que se haga ? al clickear submit
    //     console.log("Enviado", valores);
    // }   

    // const handleValores = (e) => {
    //     setValores({...valores, [e.target.name]: e.target.value});
    // }

    // return (
    //     <div className="container">
    //         <h1 className="main-title">Contacto</h1>
    //         <form className="formulario" onSubmit={handleSubmit}>
    //             <input type="text" placeholder='Ingresa tu nombre' value={valores.nombre} onChange={handleValores} name='nombre'/>
    //             <input type="email" placeholder='Ingresa tu email' value={valores.email} onChange={handleValores} name='email'/>
    //             {/* // name=nombre name=email deben ser los mismos que los declarados en el useState para poder capturarlos  */}
    //             <button type='submit'>Enviar</button>
    //         </form>
    //     </div>
    // )

    /* Nivel 3 (react-hook-form) */

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
                <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )


}

export default Contacto;