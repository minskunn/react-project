import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="row Weather-information">
      <div className="col-6 align-items-center">
        <span className="currentTime">
          Today | <FormattedDate date={props.data.date} />
        </span>
        <div className="text-capitalize">{props.data.description}</div>
        <WeatherIcon code={props.data.icon} size={25} />
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="col-6 align-items-center">
        <ul>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h </li>
        </ul>
      </div>
    </div>
  );
}
