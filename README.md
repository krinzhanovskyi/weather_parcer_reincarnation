# Weather API Parser

A Node.js project that collects current weather data from OpenWeatherMap and calculates average readings for the previous day.

## Features

- retrieves temperature and humidity for fixed Zurich coordinates;
- requests data immediately at startup and every hour afterward;
- saves readings to `weather.json`;
- calculates average temperature and humidity for yesterday.

## Requirements

- Node.js with `--env-file` support (Node.js 20.6 or newer recommended);
- an OpenWeatherMap API key;
- the `axios` dependency installed.

## Installation

```bash
npm install
```

Create a `.env` file in the project root and add your API key:

```env
OPENWEATHER_API_KEY=your_openweathermap_key
```

The `.env` file and `node_modules` directory are excluded from Git through `.gitignore`.

## Collecting Data

```bash
node --env-file=.env weather.js
```

The script sends requests to OpenWeatherMap for coordinates `47.3769, 8.5417` using metric units. It performs the first request immediately and subsequent requests every 60 minutes. Press `Ctrl+C` to stop the script.

Each successful reading is appended to the `weather.json` array:

```json
[
  {
    "timestamp": "2026-11-26T07:21:39.168Z",
    "temperature": 0.4,
    "humidity": 90
  }
]
```

Reading fields:

- `timestamp` — collection date and time in ISO 8601 format;
- `temperature` — temperature in degrees Celsius;
- `humidity` — relative humidity in percent.

## Calculating Average Values

```bash
node weather-stats.js
```

The script reads `weather.json` and prints the average temperature and humidity for readings from the previous calendar day according to the system's local time.

Example output:

```text
Durchschnittstemperatur: 4.36 °C
Durchschnittliche Luftfeuchtigkeit: 88.00 %
Datum: Wed Nov 25 2026
```

If there are no readings for the previous day, the script prints `Nichts gibts.`.

## Error Handling

Request and file-reading errors are printed to the console. If a network request fails, no invalid record is added to `weather.json`.

## Project Structure

├── `weather.js` — collects data from OpenWeatherMap and writes it to JSON.
├── `weather-stats.js` — calculates average readings for yesterday.
├── `weather.json` — accumulated weather readings.
├── `README.md` — project documentation; including setup and usage instructions.
├── `LICENSE` - project MIT license.
└── `package.json` — the `axios` dependency and project metadata.

The project does not currently include automated tests or npm launch commands.

## License

This project is distributed under the MIT License. See [LICENSE](./LICENSE) for details.
