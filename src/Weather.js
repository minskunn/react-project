import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather-wrapper">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city.."
                className="form-control Search-input"
              />
            </div>
            <div className="col-3 p-0">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
          <h1>{weatherData.city}</h1>
        </form>
        <div className="row Weather-information">
          <div className="col-4 align-items-center">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
          </div>
          <div className="col-4 align-items-center">
            <ul>
              <li>Monday 8pm</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-4 align-items-center">
            <ul>
              <li>Feels like: {weatherData.feels} </li>
              <li>Humidity </li>
              <li>Wind </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>
            This project was coded by
            <a href="https://github.com/minskunn" target="_blank">
              Minna K
            </a>{" "}
            and is
            <a href="https://github.com/minskunn/" target="_blank">
              is open-sourced on GitHub
            </a>
            and
            <a href="https://github.com/minskunn/" target="_blank">
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let city = "Oslo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
