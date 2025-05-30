import React, { useState } from "react";

// use api keys from open weather or some other shits 
const API_KEY = "";

const cities = [
  { name: "New York", id: "5128581" },
  { name: "London", id: "2643743" },
  { name: "Tokyo", id: "1850147" },
  { name: "Paris", id: "2988507" },
  { name: "Sydney", id: "2147714" },
];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].id);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityId) => {
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchWeather(selectedCity);
    
  }, [selectedCity]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <div style={styles.selectorContainer}>
        <label htmlFor="city" style={styles.label}>Select City:</label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={styles.select}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>
      </div>
      <div style={styles.card}>
        {loading && <p>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}
        {weather && (
          <>
            <h2 style={styles.cityName}>{weather.name}</h2>
            <p style={styles.temp}>{Math.round(weather.main.temp)}°C</p>
            <p style={styles.desc}>{weather.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              style={styles.icon}
            />
            <div style={styles.details}>
              <span>Humidity: {weather.main.humidity}%</span>
              <span>Wind: {weather.wind.speed} m/s</span>
            </div>
          </>
        )}
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    fontFamily: "Segoe UI, sans-serif",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  title: {
    color: "#222",
    fontWeight: 700,
    fontSize: "2.5rem",
    marginBottom: 30,
    letterSpacing: 2,
  },
  selectorContainer: {
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: 500,
    color: "#333",
  },
  select: {
    padding: "8px 16px",
    borderRadius: 6,
    border: "1px solid #aaa",
    fontSize: "1rem",
    outline: "none",
  },
  card: {
    background: "rgba(255,255,255,0.85)",
    borderRadius: 16,
    boxShadow: "0 8px 32px 0 rgba(31,38,135,0.2)",
    padding: "32px 40px",
    minWidth: 320,
    minHeight: 220,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  cityName: {
    fontSize: "2rem",
    fontWeight: 600,
    color: "#333",
    margin: 0,
  },
  temp: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#007cf0",
    margin: "10px 0",
  },
  desc: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  details: {
    display: "flex",
    gap: 20,
    fontSize: "1rem",
    color: "#444",
    marginTop: 10,
  },
  error: {
    color: "#e74c3c",
    fontWeight: 500,
  },
};

export default App;