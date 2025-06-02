import "./PookiemonApi.css";
export const PokemonCard = ({ pokemonData }) => {
    return (
        <>
          <li className="card">
                <img src={pokemonData.sprites.other.dream_world.front_default}
                 alt={pokemonData.name}
                 className="card_img" />
                 <h1>{pokemonData.name}</h1>
                 <div className="pokemon_info">
                    <p>
                        {pokemonData.types.map((currtype) => currtype.type.name).join(" , ")}
                    </p>
                    <div className="more_info">
                        <p>{pokemonData.weight}</p>
                        <p>{pokemonData.height}</p>
                        <p>{pokemonData.stats[5].base_stat}</p>
                    </div>
                 </div>
          </li>
        </>
    )
}