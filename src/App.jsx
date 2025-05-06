import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { useState, useEffect } from 'react';
import './App.css'


const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    // console.log('Data:', data);
    setWeather(newWeatherState);
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState); 
    }
     // Call the fetch function when the page loads:
     fetchDefaultData();
  }, []) // An empty dependency array means this runs once after the initial render

  console.log('State:', weather);

  return (
    <>
    <h1>Hello world!</h1>
    <WeatherSearch fetchData = {fetchData} />
    <WeatherDetails weather={weather} />
    </>
  );
}


export default App










//notes
//The term AJAX (Asynchronous JavaScript and XML) refers to a collection of techniques for sending and receiving data within client-side web applications. These techniques allow client-side apps to communicate asynchronously with a server and update the DOM accordingly. Ultimately, this produces more interactive web applications.