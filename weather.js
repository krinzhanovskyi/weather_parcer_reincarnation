const axios = require("axios");

async function collectWeather() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat: 47.3769,
        lon: 8.5417,
        units: "metric",
        appid: process.env.OPENWEATHER_API_KEY,
      },
    },
  );

  const record = {
    timestamp: new Date().toISOString(),
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
  };

  console.log(record);
}

collectWeather().catch((error) => console.error(error.message));
