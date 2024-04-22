import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import CurrentWeatherInfo from "../components/CurrentWeatherInfo";
import WeatherForecast from "../components/WeatherForecast";

function CardDetailView({ id }) {
  const [city, setCity] = useState({});

  useEffect(() => {
    (async function () {
      const url = "/mockAPI/data.json";

      const response = await fetch(url);
      const result = await response.json();

      const foundElement = result.find((elem) => {
        return elem.id == id;
      });

      if (!foundElement) {
        window.location.href = "/pagenotfound";
        return;
      }

      setCity(foundElement);
    })();
  }, [id]);

  return (
    <>
      <div className="headerBackground"></div>
      <div className="spacer"></div>
      <div className="cityDetailContainer">
        <h2>{city.name}</h2>
        {/* <p>{city.id}</p>
        <p>{city.date}</p> */}
      </div>
      <Carousel city={city} />
      <div className="cityInfo">
        <p>{city.description}</p>
        {/* Usar conditional rendering para evitar erro quando as props lat e lon sao undefined */}
        <CurrentWeatherInfo lat={city.lat} lon={city.lon} />
      </div>
      <WeatherForecast lat={city ? city.lat : 0} lon={city ? city.lon : 0} />
      <Cards />
    </>
  );
}

export default CardDetailView;
