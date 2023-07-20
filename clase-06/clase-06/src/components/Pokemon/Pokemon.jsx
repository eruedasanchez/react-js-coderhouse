import { useEffect, useState } from "react"

const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())  // tenemos otra promesa mas (hay no colocarle llaves a response.json(), estamos haciendo un return implicito)
        // Por lo tanto, creamos otro .then para captura la respuesta de response.json (data: la informacion de la pokeAPI)
        .then((data) => {
            setPokemon(data)
        })
    }, [id])

    const handleAnterior = () => {
        setId(id - 1); 
    }

    const handleSiguiente = () => {
        setId(id + 1);
    }
    
    return (
        <div>{
                pokemon && 
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>Id: {pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br/>
                    {id > 1 ? <button onClick={handleAnterior}>Anterior</button> :  <button disabled>Anterior</button>}
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }  
        </div>
    )
}

export default Pokemon;



/* Observacion */

// useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())  // tenemos otra promesa mas (hay no colocarle llaves a response.json(), estamos haciendo un return implicito)
//     // Por lo tanto, creamos otro .then para captura la respuesta de response.json (data: la informacion de la pokeAPI)
//     .then((data) => {
//         setPokemon(data)
//     })
// }, [id])

// Al colocar [id] en el segundo parametro estamos indicando que todo el contenido del useEffect se ejecuta cada vez que el componente se monta
// y cada vez que el estado de id se actualize. Con esto logramos, que se realice el fetch del pokemon correspondiente a su id