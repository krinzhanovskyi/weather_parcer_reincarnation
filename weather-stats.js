const fs = require("node:fs");
const records = JSON.parse(fs.readFileSync("weather.json", "utf8"));

function getYesterdayDate() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toDateString();
}

let temperatureSum = 0;
let humiditySum = 0;
let count = 0;
let yesterdayDate = getYesterdayDate();

const yesterdayRecords = records.filter((record) => {
  const date = new Date(record.timestamp).toDateString();
  return date === yesterdayDate;
});

console.log(yesterdayRecords);
