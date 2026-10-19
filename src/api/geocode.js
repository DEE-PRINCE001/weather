import { geoAPI } from "./axios";

export const searchCity = async (city) => {
    try {
        const res = await geoAPI.get("/search", {
            params: {
                name: city,
                count: 1,
            },
        });
        const result = res.data.results?.[0];

        if(!result) throw new Error("City not found");

        return {
            name: result.name,
            latitude: result.latitude,
            longitude: result.longitude,
            country: result.country,
        };

    }

    catch (error) {
        console.error("Geocoding error:", error);
        throw error;
    }
};