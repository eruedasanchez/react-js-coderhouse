import { useState, useEffect } from "react";
import Pokemon from "./Pokemon/Pokemon"

const PokemonList = () => {

    const [currentList, setCurrentList] = useState([]);
    const [url, setUrl] = useState(["https://pokeapi.co/api/v2/pokemon?limit=5&offset=5"]);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");

    const handleAnterior = () => {
        previous && setUrl(previous);

    }

    const handleSiguiente = () => {
        setUrl(next);
    }


    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCurrentList(data);
            setNext(data.next);
            setPrevious(data.previous);
        })
    }, [url])

    console.log(currentList);
    

    
    return (
        <div>
            {
                currentList.results &&
                <div>
                    {currentList.results.map((pokemon) => {
                        return(
                            <div key={pokemon.id}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    <button onClick={handleAnterior}>Anterior</button>
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div> 
            }
        </div>
    )
}

export default PokemonList;