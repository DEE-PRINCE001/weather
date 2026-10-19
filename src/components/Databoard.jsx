import React from 'react'


import HourlyCard from './HourlyCard'
import DailyCard from './DailyCard'
import PKICard from './PKICard'
import { getWeatherIcon } from '../utils/iconMap'
import { dayMap } from '../utils/dateMap'
import { CtoF, FtoC, IntoMm, KmhtoMph, MmtoIn, MphtoKmh } from '../utils/unitConverter'


const Databoard = ({weather, celsius, mph, inches, unit, imperial, error}) => {

  const getDay = (date) => {
    date = new Date(date);
    return dayMap(date.getDay());
    } 

    const getHour = (date) => {
    date = new Date(date);
    let hour = date.getHours();
    if (hour === 0) hour = 12;
    if (hour > 12){
      hour -= 12
      return `${hour} PM`
    }

    return `${hour} AM`
    } 

  const date = new Date();
    const formattedDate = date.toLocaleDateString("en-Us", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  
  if (error == "Error: City not found") {
        return (<div className='text-white font-[Bricolage] text-center mt-6 text-l mx-4'>No search result found!</div>)
      }

  if (error) {
    return (<div className='text-white font-[Bricolage] text-center mt-6 text-xl mx-4'>{error}</div>)
  }
  


  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:space-3 mx-2 my-4 font-[DMSans] text-white sm:items-stretch'>
      <div className='w-full'>
        <div className='relative bg-[url(./src/assets/images/bg-today-small.svg)] sm:bg-[url(./src/assets/images/bg-today-large.svg)] bg-cover w-full h-64 rounded-3xl text-white font-[DMSans]'>
          <div className='flex flex-col pt-3 top-0 left-0 justify-center items-center bg-blue-800/50 bg-cover w-full h-64 rounded-4xl text-white font-[DMSans]'>
            <h5 className='text-2xl font-bold '>{weather.location.name}, {weather.location.country}</h5>
            <p className='text-l mt-1'>{formattedDate}</p>
            <div className='flex justify-start items-center  mt-2 ml-0'>
              <img src="./src/assets/images/icon-sunny.webp" alt="" className='object-cover h-30 m-0'/>
              <h1 className='text-7xl italic'>{(celsius && weather.current.temp) || CtoF(weather.current.temp)}&deg;</h1>
            </div>
          </div>
          
        </div>

{/* PKICards */}
        <div className='my-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-white font-[DMSans] font-medium'>
            <PKICard vector="Feels Like" value={(celsius && `${weather.stats.feelsLike}\u00B0`) || `${CtoF(weather.stats.feelsLike)}\u00B0`}/>
            <PKICard vector={"Humidity"} value={ `${weather.stats.humidity}%`}/>
            <PKICard vector={"Wind"} value={(mph && `${KmhtoMph(weather.current.wind)} mph`) || `${weather.current.wind} km/h`}/>
            <PKICard vector={"Precipitation"} value={(inches && `${MmtoIn(weather.stats.precipitation)} in`) || `${weather.stats.precipitation} mm`}/>
          </div>
        </div>

{/* Daily Forecast */}
        <div>
          <p className='text-white font-[DMSans] mb-2'>Daily forecast</p>
          <div className='grid grid-cols-3 md:grid-cols-7 gap-2 text-white'>
            {weather.daily.map((day, index) => (              
              <DailyCard key = {index} day={getDay(day.date).slice(0,3)} image={getWeatherIcon(day.code)} 
              from={(celsius && `${day.min}\u00b0`) || `${CtoF(day.min)}\u00b0`} to={(celsius && `${day.max}\u00b0`) || `${CtoF(day.max)}\u00b0`} />
                      
            ))}
          </div>
        </div>
      </div>

{/* HOURLY FORECAST */}
      <div className='flex flex-col bg-neutral-600/40 rounded-lg p-3 gap-2 sm:w-[35%] justify-between h-145'> 
        <div className='flex w-full justify-between items-center cursor-pointer'>
          <p className='text-6'>Hourly forecast</p>
          <div className='flex bg-neutral-600/70 h-8 rounded-md items-center justify-around p-2 w-[38%] border border-neutral-600/50'>
            <p className='text-sm'>{formattedDate.split(",")[0]}</p>
            <img src="./src/assets/images/icon-dropdown.svg" alt="" className='object-cover h-1.5'/>
          </div>
        </div>
        <div className='flex flex-col gap-2 overflow-y-scroll'>
        {weather.hourly.map((hour, index) => (
            <HourlyCard key={index} time={getHour(hour.time)} image={getWeatherIcon(hour.code)} temp= {(celsius && `${hour.temp}\u00b0`) || `${CtoF(hour.temp)}\u00b0`} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Databoard 

