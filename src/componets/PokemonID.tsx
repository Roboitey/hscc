
import { useParams } from "react-router-dom"
import { getPokemon } from "../Hooks/usePokemonApi";
import './PokemonStyle.css'; 

export default function PokemonID() {
    const { id } = useParams();
    const pokemon = getPokemon(id);

    // Define a CSS style for centering the image
    const centerImageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={centerImageStyle}>
            {pokemon && (
                <img
                    width={250}
                    height={250}
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            )}
        </div>
    );
}
