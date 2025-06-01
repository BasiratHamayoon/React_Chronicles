import { useState, useEffect } from "react";
import "./PookiemonApi.css";
export const PookiemoonApi = () => {
    const [ apiData, setApiData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState()
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const fetchData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setError(error.message);
            setLoading(false)
        });
    }
    useEffect(() => {
            fetchData();
        }, [])
        console.log(apiData)
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
                <div className="cards_container">
                    <div className="card">
                            <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
                            <h1>{apiData.name}</h1>
                            <div className="info">
                                <p>Weight: {apiData.weight}</p>
                                <p>Height: {apiData.height}</p>
                            </div>
                            <p>Speed: {apiData.stats[5].base_stat}</p>
                    </div>
                </div>
           </section>
        </>
    )
}