import { useState, useEffect } from "react";
import "./PookiemonApi.css";
import { PokemonCard } from "./PookemonCard";
export const PookiemoonApi = () => {
    const [ pokemon, setPokemon ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState()
    const [ search, setSearch ] = useState("")
    const url = "https://pokeapi.co/api/v2/pokemon?limit=124";
    const fetchData =  async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
             const detailedAPI = data.results.map(async (currAPI) => {
                const res = await fetch(currAPI.url);;
                const data = res.json();
                return data
             });
             const detailedResponses = await Promise.all(detailedAPI);
              console.log(detailedResponses);
              setPokemon(detailedResponses)
              setLoading(false);

        } catch(error) {
            console.log(error);
            setError(error.message);
            setLoading(false)
        };
    }
    useEffect(() => {
            fetchData();
        }, [])
    const filteredData = pokemon?.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

        if(loading) {
            return <h1 className="loading">Loading...</h1>
        }
        if(error) {
            return <h1>{error}</h1>
        }

    return (
        <>
           <section className="container">
                <h1 className="main_heading">Lets Catch Pokemon</h1>
                <form>
                    <input type="text" placeholder="Search pokemon"
                     value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
                <div className="card_container">
                    {
                        filteredData?.map((item) => {
                            return (
                                <PokemonCard key={item.id} pokemonData = {item} />
                            )
                        })
                    }
                </div>
           </section>
        </>
    )
}