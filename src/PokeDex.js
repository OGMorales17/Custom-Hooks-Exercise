import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios("pokemon", BASE_URL)

  console.log(pokemon)
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
