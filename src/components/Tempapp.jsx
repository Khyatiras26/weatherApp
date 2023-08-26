import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Gorakhpur");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cd2f5d4c7980df97387b951bf15ff9b0`
            const response = await fetch(url)
            const resJson = await response.json()
            console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi();
    },[search, setSearch])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        placeholder="Search your city"
                        value={search}
                        onChange={(event) => {

                            setSearch(event.target.value);

                        }}
                    />
                    
                    
                </div>
                {!city ? (
                    <p className="error_msg"> Data Not Found</p>
                ): 
                (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i> {search}
                            </h2>
                            <h1 className="temp"> {city.temp} cel</h1>
                            <h3 className="tempmin_max"><span style = {{color : "gray"}}>Min:</span>{city.temp_min}cel &nbsp; &nbsp; &nbsp; &nbsp; <span style = {{color : "gray"}}>Max:</span>{city.temp_max} cel</h3>
                        </div>
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )}
                
            </div>
        </>
    )

}

export default Tempapp;