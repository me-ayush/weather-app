import React from 'react'
import '../sass/main.scss'
import img from '../sass/cloudy.png'

export default function City(props) {
    const {updateCity, fetchWeather} = props;

    return (
        <div className="city">
            <div className="city-img">
                <img src={img} />
            </div>
            <div className="search-box">
                <p>Enter City Name To Search</p>
                <form onSubmit={fetchWeather}>
                    <input type="text" placeholder="Enter City Name" onChange={(e)=>updateCity(e.target.value)} required/>
                    <button type="submit ">Search</button>
                </form>
            </div>
        </div>
    )
}
