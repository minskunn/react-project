import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="row Weather-information">
      <div className="col-4 align-items-center">
        <WeatherIcon code={props.data.icon} size={52} />
        <span className="temperature">
          {Math.round(props.data.temperature)}°C
        </span>
      </div>
      <div className="col-4 align-items-center">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="col-4 align-items-center">
        <ul>
          <li>Humidity:{props.data.humidity}%</li>
          <li>Wind:{props.data.wind}km/h </li>
        </ul>
      </div>
    </div>
  );
}
