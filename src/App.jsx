import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Databoard from './components/Databoard'
import SearchBar from './components/SearchBar'


import { searchCity } from './api/geocode'
import { getWeather } from './api/weather'
import { transformWeather } from './utils/transformWeather'
import LoadingDataboard from './components/LoadingDataboard'


const App = () => {

  // For setting Units

  const [celsius, setCelsius] = useState(true);
  const [mph, setMph] = useState(false);
  const [inches, setInches] = useState(false);

  const [imperial, setImperial] = useState(true);


   const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Lagos");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchWeather = async (cityName) => {
      try {
        setLoading(true);
        setError(null);

        const location = await searchCity(cityName);
  
        const rawData = await getWeather(location.latitude, location.longitude);
  
        const cleanData = transformWeather(rawData);
  
        setWeather({...cleanData, location,});


        return weather;
      }
  
      catch(err) {
        setError(`${err}`);
      }
  
      finally{
        setLoading(false)
      }
    };
    
    const handleSearch = (city) => {
      setCity(city)
    }
    useEffect(() => {

      if(!city) return;
      fetchWeather(city);
    }, [city])
  
    
  return (<div className='sm:mx-9 sm:mt-5'>

  <Navbar setCelsius={setCelsius} setInches={setInches} setMph={setMph} setImperial={setImperial} celsius={celsius} imperial={imperial} mph={mph} inches={inches}/>
  <Hero/>
  <SearchBar fetchFunction={handleSearch} loading={loading} weather={weather}/>
  {(loading && !weather) && (<LoadingDataboard/>)}
  {weather && !(String(error).toLowerCase().includes("network")) && (<Databoard weather={weather} celsius={celsius} inches={inches} mph={mph} error={error}/>)}
  {(!loading) && (String(error).toLowerCase().includes("network")) && <div className='text-white font-[Bricolage] text-center mt-6 text-l mx-4'>Network error! <br />Kindly check your internet connection</div>}
 </div>
  )
}

export default App
