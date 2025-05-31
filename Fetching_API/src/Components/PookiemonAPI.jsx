import { useState, useEffect } from "react";
import "./PookiemonApi.css";
export const PookiemoonApi = () => {
    const [apiData, setApiData] = useState();
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
    const fetchData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data)
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
            fetchData();
        }, [])
        console.log(apiData)
        if(!apiData) {
            return <div>Loading...</div>
        }
    return (
        <>
           <section className="container">
                <h1 className="main_heading">Lets Catch Pokemon</h1>
                <div className="cards_container">
                    <div className="card">
                            <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
                            <h1>{apiData.name}</h1>
                    </div>
                </div>
           </section>
        </>
    )
}