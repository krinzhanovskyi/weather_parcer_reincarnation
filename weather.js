const axios = require("axios");
const fs = require("node:fs");

async function parsing() {
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

  const fileContent = fs.readFileSync("weather.json", "utf8");
  const records = JSON.parse(fileContent);

  records.push(record);

  fs.writeFileSync("weather.json", JSON.stringify(records, null, 2));

  console.log("& Weather data collected &");
}

function startparsing() {
  parsing().catch((error) => console.error(error.massage));
}

startparsing();
setInterval(startparsing, 60 * 60 * 1000);
