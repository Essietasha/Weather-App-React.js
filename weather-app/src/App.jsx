import React from 'react';
import './App.css';
import Weather from './components/Weather';
import { useState } from 'react';

const App = () => {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState('');

  function handleLocation(event){
    setCity(event.target.value);
}
  
  const fetchWeather = async (event) => {
    event.preventDefault();

    try{
      const apiKey = '8f60ab1099ff1793ae01688cd43b48ee';
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
   
      const response = await fetch(apiUrl);
      if(!response.ok){
        throw new Error('Unable to fetch weather data...')
      }else{
        setError(false);
      }

      const data = await response.json();
      setWeather(data);
    } catch(error){
      setError(true);
    }

  }

  return (<>
    {error && <p className='error'>Unable to get forecast!!!</p>}
    <Weather fetchWeather={fetchWeather} weather={weather} handleLocation={handleLocation}/>
    </>
  )
}

export default App;

