import { weatherAPI } from "./axios";

export const getWeather = async (latitude, longitude) => {
    try {
        const res = await weatherAPI.get("/forecast", {
            params: {
                latitude,
                longitude,
                current_weather: true,

                hourly: [
                    "temperature_2m", 
                    "relativehumidity_2m",
                    "apparent_temperature",
                    "precipitation",
                    "weathercode",
                ].join(","),

                daily: [
                    "weathercode",
                    "temperature_2m_max",
                    "temperature_2m_min"
                ].join(","),

                timezone: "auto",
            }
        })

        return res.data
    }
    catch(error) {
        console.error("Weather fetch erro:", error);
        throw error;
    }
};