## Weather API Parser

This parser fetches weather data from an API and converts the response into a structured format.

### Features

- Retrieves current weather conditions
- Parses temperature, humidity, and wind data
- Handles API errors and invalid responses

### Usage

1. Configure the API endpoint and credentials.
2. Request weather data for a location.
3. Parse the response and use the returned weather details.

```bash
    node --env-file=.env weather.js
```

### Response Format

```json
{
  "temperature": 18.5,
  "humidity": 65
}
```

### Error Handling

The parser returns an error when the API request fails or the response is missing required fields.

### LICENSE

This project is licensed under the MIT License. See [LICENCE](./LICENCE).
