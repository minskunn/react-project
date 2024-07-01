import React from "react";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <div className="WeatherForecast">Sunday</div>
      <WeatherIcon code="01d" size={36} />
      <div className="row">
        <span className="col">20</span>
        <span className="col">10</span>
      </div>
    </div>
  );
}
