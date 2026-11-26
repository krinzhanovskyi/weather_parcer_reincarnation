const fs = require("node:fs");
const records = JSON.parse(fs.readFileSync("weather.json", "utf8"));

function getYesterdayDate() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toDateString();
}

let yesterdayDate = getYesterdayDate();

const yesterdayRecords = records.filter((record) => {
  const date = new Date(record.timestamp).toDateString();
  return date === yesterdayDate;
});

function calcAverage(records) {
  const count = records.length;

  if (count === 0) {
    return null;
  }

  let temperatureSum = 0;
  let humiditySum = 0;

  for (const record of records) {
    temperatureSum += record.temperature;
    humiditySum += record.humidity;
  }

  return {
    averageTemperature: temperatureSum / count,
    averageHumidity: humiditySum / count,
  };
}

let averages = calcAverage(yesterdayRecords);

if (averages === null) {
  console.log("Nichts gibts.");
} else {
  console.log(
    `Durchschnittstemperatur: ${averages.averageTemperature.toFixed(2)} °C`,
  );
  console.log(
    `Durchschnittliche Luftfeuchtigkeit: ${averages.averageHumidity.toFixed(2)} %`,
  );
  console.log("Datum:", yesterdayDate);
}
