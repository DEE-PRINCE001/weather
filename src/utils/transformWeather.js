export const transformWeather = (data) => {
    const current = data.current_weather;
    return {
        current: {
            temp: current.temperature,
            wind: current.windspeed,
            code: current.weathercode,
        },

        stats: {
            humidity: data.hourly.relativehumidity_2m[0],
            feelsLike: data.hourly.apparent_temperature[0],
            precipitation: data.hourly.precipitation[0],
        },

        hourly: data.hourly.time.slice(0, 24).map((time, i) => ({
            time, 
            temp: data.hourly.temperature_2m[i],
            code: data.hourly.weathercode[i],           
            
        })),
        

        daily: data.daily.time.map((date, i) => ({
            date,
            max: data.daily.temperature_2m_max[i],
            min: data.daily.temperature_2m_min[i],
            code: data.daily.weathercode[i],
        })),
    };
};