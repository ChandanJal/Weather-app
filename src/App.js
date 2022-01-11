import "./App.css";
import AirQualityCard from "./components/AirQualityCard";
import Home from "./components/Home";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <WeatherCard />
      <AirQualityCard />
    </div>
  );
}

export default App;
