import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-information">
      <div className="row">
        <div className="col-md-12">
          <h1 className="city-name">
            {props.city} <WeatherTemperature celsius={props.data.temperature} />
          </h1>
        </div>
        <div className="col-md-6 Weather-info-left">
          <div className="currentTime">
            Today | <FormattedDate date={props.data.date} />
          </div>
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="col-md-6 Weather-info-right">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} mps </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
