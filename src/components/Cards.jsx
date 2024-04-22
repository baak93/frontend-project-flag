import { Link } from "wouter";
import { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "/mockAPI/data.json";

      const response = await fetch(url);
      const result = await response.json();

      setData(result);
    })();
  }, []);

  return (
    <div className="cardsSection">
      {data.map((city) => (
        <Link href={"/tripdetail/" + city.id} key={city.id}>
          <div className="card">
            <img src={city.cardImg} alt={`Image for ${city.city}`} />
            <p>
              <span>{city.name}</span>
              <br />
              {city.from} - {city.to}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
