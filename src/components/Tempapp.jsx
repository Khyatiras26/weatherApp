import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Gorakhpur");
    const [unit, setUnit] = useState('metric'); // Default unit is metric (Celsius)

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&appid=cd2f5d4c7980df97387b951bf15ff9b0`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    }, [search, unit]);

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
                    /> &nbsp; &nbsp; &nbsp; &nbsp;
                    <label>
                        Unit:
                        <select className="unit_style"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                        >
                            <option value="metric">Celsius</option>
                            <option value="imperial">Fahrenheit</option>
                        </select>
                    </label>
                </div>
                {!city ? (
                    <p className="error_msg"> Data Not Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>{" "}
                                {search}
                            </h2>
                            <h1 className="temp">
                                {city.temp} {unit === 'metric' ? 'cel' : 'F'}
                            </h1>
                            <h3 className="tempmin_max">
                                <span style={{ color: "rgba(0, 0, 0, 0.782)" }}>Min:</span>
                                {city.temp_min} {unit === 'metric' ? 'cel' : 'F'} &nbsp; &nbsp; &nbsp; &nbsp;
                                <span style={{ color: "rgba(0, 0, 0, 0.782)" }}>Max:</span>
                                {city.temp_max} {unit === 'metric' ? 'cel' : 'F'}
                            </h3>
                        </div>
                        
                    </div>
                )}
            </div>
        </>
    );
};

export default Tempapp;
