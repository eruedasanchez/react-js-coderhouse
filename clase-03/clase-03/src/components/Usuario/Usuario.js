const Usuario = (props) => {
    return (
        <div>
            <h1>Nombre: {props.nombre}</h1>
            <p>Edad: {props.edad}</p>
            <p>Profesion: {props.profesion}</p>
            <hr/>
        </div>
    )
}

export default Usuario;


