import './sass/main.scss';
import City from './components/City';
import Weather from './components/Weather';
import {useState ,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState(null);
  const [error, setError] = useState(false)

  const fetchWeather = async(e) =>{
    e.preventDefault();
    // const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe84db9cdb35a33226bd2fb8c9fcfda8`);
    // updateWeather(res.data);
    // if(!weather){
    //     console.log("error");
    //   }
  getDataPromise().then(res => updateWeather(res), setError(false))
    };
    
    function getDataPromise() {
      return axios({
              url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe84db9cdb35a33226bd2fb8c9fcfda8`,
              method: 'get',
              timeout: 8000,
              headers: {
                  'Content-Type': 'application/json',
              }
          })
         .then(res => res.data)
         .catch (err => setError(true))
      }
  



  return (
    <div className="container">
        <div className="box">
          <div className="title">
            <h3>Weather App</h3>
          </div>
          {weather?
          <Weather weather={weather}/>:
            <City updateCity={updateCity} fetchWeather={fetchWeather}/>
          }
          <p className="error">{error?'City Not Found':''}</p>
        </div>
    </div>
  );
}

export default App;
