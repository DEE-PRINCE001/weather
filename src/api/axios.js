import axios from "axios";

export const weatherAPI = axios.create({baseURL: "https://api.open-meteo.com/v1",});

export const geoAPI = axios.create({baseURL: "https://geocoding-api.open-meteo.com/v1",});