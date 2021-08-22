import React from 'react'
import '../sass/main.scss'
import img from '../sass/cloudy.png'
import sun from '../sass/sun.png'
import humidity from '../sass/humidity.png'
import pressure from '../sass/pressure.png'
import wind from '../sass/wind.png'

export default function Weather(props) {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime=(t)=>{
        return `${new Date(t*1000).getHours()}:${new Date(t*1000).getMinutes()}`;
    }
    return (
        <div className="temp-detail">
            <div className="temp">
                <div className="details">
                {Math.floor(weather?.main?.temp -273)} °C | {weather?.weather[0].description}
                </div>
                <div className="img">
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}/>
                </div>
            </div>
            <div className="city-name">
                {`${weather?.name}, ${weather?.sys?.country}`}
            </div>
            <div className="weather-info">
                <div className="p">Weather Info</div>
                <div className="sub-menu">
                    <div className="sunset">
                        <img src={sun} />
                        <div className="info">
                            {isDay?'Sunset':'Sunrise'}
                            <p>{isDay?getTime(weather?.sys?.sunset):getTime(weather?.sys?.sunrise)}</p>
                        </div>
                    </div>
                    <div className="wind">
                        <img src={wind} />
                        <div className="info">
                            Wind
                            <p>{weather?.wind?.speed}</p>
                        </div>
                    </div>
                    <div className="humidity">
                        <img src={humidity} />
                        <div className="info">
                            Humidity
                            <p>{weather?.main?.humidity}</p>
                        </div>
                    </div>
                    <div className="presure">
                        <img src={pressure} />
                        <div className="info">
                            Pressure
                            <p>{weather?.main?.pressure}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
