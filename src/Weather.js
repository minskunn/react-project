import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city.."
                className="form-control Search-input"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 p-0">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
          <h1>{weatherData.city}</h1>
        </form>
        <WeatherInfo data={weatherData} />
        <footer>
          <p>
            This project was coded by
            <a
              href="https://github.com/minskunn"
              target="_blank"
              rel="noreferrer"
            >
              Minna K
            </a>{" "}
            and is
            <a
              href="https://github.com/minskunn/"
              target="_blank"
              rel="noreferrer"
            >
              is open-sourced on GitHub
            </a>
            and
            <a
              href="https://github.com/minskunn/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
