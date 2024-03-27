import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "5d34bf0a2ca44a57962183955232911";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const city = formData.get("city");

    if (!city) return;

    fetchWeather(city);
  };

  const fetchWeather = async (city) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error("Failed to Fetch!");

      const reqd_data = [
        {
          label: "Temperature",
          data: `${data.current.temp_c}°C`,
        },
        {
          label: "Humidity",
          data: `${data.current.humidity}%`,
        },
        {
          label: "Condition",
          data: `${data.current.condition.text}`,
        },
        {
          label: "Wind Speed",
          data: `${data.current.wind_kph} kph`,
        },
      ];

      setWeatherData(reqd_data);
    } catch (err) {
      alert("Failed to fetch weather data");
      setWeatherData([]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form className="inp-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" name="city" required />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading data...</p>}
      {!isLoading && weatherData.length > 0 && (
        <div className="weather-cards">
          {weatherData.map((data, id) => {
            return <WeatherCard key={id} label={data.label} data={data.data} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
