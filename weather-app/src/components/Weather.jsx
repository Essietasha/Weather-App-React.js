import React from 'react';
import weatherLogo  from '../assets/images/weather.jpg';
import weatherIcon  from '../assets/images/weatherii.jpg';
import location  from '../assets/images/locationii.png';

const Weather = ({ weather, fetchWeather, handleLocation }) => {

  return (
    <div className="container">
        <div className="topCont">
            <img className="imgWeather" src={weatherLogo} alt="image" />
            {weather && <h3 id="degreeCelsius">{Math.round(weather.main.temp)}°</h3>}
        </div>
        <div className="weatherState">
            <h4 id="clouds">Weather</h4>
            <div className="location">
                <img src={location} alt="" className='loactionImg'/>
                {weather ? <h5 id="currentLocation">{weather.name}</h5> : <h5 id="currentLocation">Current Location</h5>}
            </div>
        </div>

        <div className="degree">
            <h6 className="H">H: {weather && weather.main.temp_max}</h6>
            <h6 className="L">L: {weather && weather.main.temp_min}</h6>
        </div>


        <form onSubmit={fetchWeather} className="userLocation">
            <input type="text" id="LocationInput" placeholder="Input your Location" onChange={handleLocation} />
            <button id="getLocation">Get Weather Forecast</button>
        </form>

        <div className="dailyForecast">
            <div className="box">
                <h5>Now</h5>
                <img src={weatherIcon} alt="" className="imgIcon" />
                <h6>°C</h6>
            </div>
            <div className="box">
                <h5>11PM</h5>
                <img src={weatherIcon} alt="" className="imgIcon" />
                <h6>°C</h6>
            </div>
            <div className="box">
                <h5>12PM</h5>
                <img src={weatherIcon} alt="" className="imgIcon" />
                <h6>°C</h6>
            </div>
            <div className="box">
                <h5>1AM</h5>
                <img src={weatherIcon} alt="" className="imgIcon" />
                <h6>°C</h6>
            </div>
            <div className="box">
                <h5>2AM</h5>
                <img src={weatherIcon} alt="" className="imgIcon" />
                <h6>°C</h6>
            </div>
        </div>
    </div>
  )
}

export default Weather;