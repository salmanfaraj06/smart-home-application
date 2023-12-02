import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import s from "./widget.module.css";

function Widget() {
  const [date, setDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const timer = setInterval(updateDate, 1000 * 60);

    const cleanUp = () => {
      clearInterval(timer);
    };

    return cleanUp;
  }, []);

  useEffect(() => {
    const getWeatherData = async (locationData) => {
      const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationData.coords.latitude},${locationData.coords.longitude}&aqi=no`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();

      setWeatherData(data);
    };

    const coords = navigator.geolocation.getCurrentPosition(getWeatherData);
  }, []);

  return (
    <div>
      <div className={s.dateandtime}>
        <h1 className="text-white font-normal ">
          {date.getHours() + ":" + date.getMinutes()}
        </h1>
        <h4 className="text-white font-normal text-xl mt-2">
          {date.toDateString()}
        </h4>
      </div>

      <div className={s.widget_weather}>
        <div className={s.tempbox}>
          <div className={s.tempicon}>
            <FontAwesomeIcon
              icon={faTemperatureHalf}
              style={{ color: "#00000" }}
            />
          </div>

          <p className={s.widget_weather_temp}>Temperature </p>
        </div>
        <div className={s.datadesign}>
          <p className={s.widget_weather_temp}>
            {!weatherData ? "Loading..." : weatherData.current.temp_c}°C
          </p>
        </div>
        <div className={s.humiditybox}>
          <div className={s.tempicon}>
            <FontAwesomeIcon icon={faCloudRain} style={{ color: "#00000" }} />
          </div>

          <p className={s.widget_weather_humidity}>Humidity </p>
        </div>
        <div className={s.datadesign}>
          <p className={s.widget_weather_humidity}>
            {!weatherData ? "Loading..." : weatherData.current.humidity}%
          </p>
        </div>
      </div>

      <div className={s.power_consumption}>
        <h1>Power Consumption</h1>
        <p>summary of the energy consumption</p>
      </div>
      <div className={s.card}>
        <div className={s.tempicon}>
          <FontAwesomeIcon icon={faBolt} className={s.icon} />
        </div>
        <h3>Daily Power Consumption</h3>
        <p>12 kwh</p>
      </div>
      <div className={s.card}>
        <div className={s.tempicon}>
          <FontAwesomeIcon icon={faBolt} className={s.icon} />
        </div>
        <h3>Monthly Power Consumption</h3>
        <p>234 kwh</p>
      </div>
    </div>
  );
}

export default Widget;
