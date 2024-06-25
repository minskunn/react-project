import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
      </form>
      <div className="row Weather-information">
        <div className="col-4 align-items-center">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
        </div>
        <div className="col-4 align-items-center">
          <ul>
            <li>Monday 8pm</li>
            <li>Clear sky</li>
          </ul>
        </div>
        <div className="col-4 align-items-center">
          <ul>
            <li>Precipitation 15%</li>
            <li>Humidity 75%</li>
            <li>Wind 10 km/h</li>
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
          <a
            href="https://github.com/minskunn/weather-application"
            target="_blank"
          >
            is open-sourced on GitHub
          </a>
          and
          <a href="#" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
