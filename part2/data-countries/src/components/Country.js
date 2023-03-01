import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setweather] = useState([]);
  const [icon, setIcon] = useState(null);

  const api_key = process.env.REACT_APP_API_KEY;
  //REACT_APP_API_KEY=ca276bbf2c78d356ecd5d375b0c070dd npm start
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`
      )
      .then((response) => {
        setweather(response.data);
        setIcon(response.data.weather[0].icon);
      });
  }, []);

  return (
    <div>
      <>
        <div class="rowName">
          <div class="column1">
            <h2>{country.name.common}</h2>
          </div>
          <div class="column2">
            <img
              width="50"
              height="40"
              alt={country.flags.alt}
              src={country.flags.png}
            ></img>
          </div>
        </div>
        <div className="divCountry">
          <div className="columnCountry1">
              <h3>Information</h3>
            <div className="info">
              <p><b>Capital:</b> {country.capital}</p>
              <p><b>Area:</b> {country.area}</p>
              <ul>
                <b>Languages:</b>
                {Object.values(country.languages).map((c) => (
                  <li class="margin" key={c}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="columnCountry2">
              <h3>Weather in {country.capital}</h3>
            <div className="info">
              <p><b>temperature:</b>  {weather?.main?.temp} celsius</p>
              <img
                alt="icon"
                width="50"
                height="50"
                src={`http://openweathermap.org/img/wn/${
                  icon ? icon : "01d"
                }@2x.png`}
              ></img>
              <p>wind {weather?.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Country;
