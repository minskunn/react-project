import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png", //response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
              {Math.round(weatherData.temperature)}°C
            </span>
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col-4 align-items-center">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-4 align-items-center">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h </li>
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
