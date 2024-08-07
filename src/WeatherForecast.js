import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import Axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map((dailyForecast, index) => {
              return index < 5 ? (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
