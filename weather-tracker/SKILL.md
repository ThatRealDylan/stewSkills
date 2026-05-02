---
name: weather-tracker
description: Fetches current weather and temperature for any city.
metadata:
  require-secret: true
  require-secret-description: "Enter your OpenWeatherMap API Key."
---

# Weather Tracker

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html
- data: A JSON string with the following field:
  - city: String. The name of the city (e.g., 'London', 'Tokyo').