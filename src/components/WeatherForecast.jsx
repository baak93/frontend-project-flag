import { useEffect, useState } from "react";

function WeatherForecast({ lat, lon }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    (async function () {
      if (!lat || !lon) {
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_MAP_API_KEY
      }&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      // if (result.list != undefined) {
      const fiveDayWeatherForecast = [
        result.list[8],
        result.list[16],
        result.list[24],
        result.list[32],
        result.list[39],
      ];
      console.log(fiveDayWeatherForecast);
      // }

      setForecast(fiveDayWeatherForecast);
    })();
  }, [lat]);

  return (
    <>
      <p id="fiveDayForecast">Forecast for the next 5 days</p>
      {/* <div>
        {forecast?.map((item) => (
          <>
            <p>{item.weather.icon}</p>
            <p>{item.main.temp}</p>
          </>
        ))}
      </div> */}
      <div className="forecastContainer">
        {forecast.map((item) => (
          <div className="weatherInfo">
            <img
              src={
                "https://openweathermap.org/img/wn/" +
                item.weather[0].icon +
                ".png"
              }
              alt={forecast && "weather-icon-" + item.weather[0].main}
            />
            <div className="weatherDescription">
              {item.weather[0].description}
            </div>
            <div className="forecastTemp">{item.main.temp}°C</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WeatherForecast;
