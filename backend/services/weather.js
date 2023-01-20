const axios = require('axios');

const getWeather = async () => {
    const weather = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=your_city&appid=your_api_key');
    return weather.data;
}

module.exports = getWeather;
