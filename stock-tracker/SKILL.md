---
name: stock-tracker
description: Fetches real-time stock prices and market data.
metadata:
  require-secret: true
  require-secret-description: Enter your API Key or use this one: CE0M27AQW7LSC93T.
---

---
sample
---
# Stock Tracker

## Instructions
Call the `run_js` tool with the following exact parameters:
- script name: index.html
- data: A JSON string with the following field:
  - symbol: String. The stock ticker symbol (e.g., 'AAPL').
