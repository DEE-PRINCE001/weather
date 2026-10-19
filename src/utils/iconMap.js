export const getWeatherIcon = (code) => {
    if (code === 0) return "./src/assets/images/icon-sunny.webp";
    if (code <= 3) return "./src/assets/images/icon-partly-cloudy.webp";
    if (code <= 48) return "./src/assets/images/icon-overcast.webp";
    if (code <= 67) return "./src/assets/images/icon-drizzle.webp";
    return "./src/assets/images/icon-storm.webp"
}