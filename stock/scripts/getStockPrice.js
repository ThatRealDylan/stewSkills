/**
 * @param {string} symbol - The stock ticker passed from Gemma.
 */
async function getStockPrice(symbol) {
  const API_KEY = 'CE0M27AQW7LSC93T'; // Replace with your key
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Alpha Vantage returns data in a "Global Quote" object
    const quote = data["Global Quote"];
    
    if (quote && quote["05. price"]) {
      const price = parseFloat(quote["05. price"]).toFixed(2);
      const change = quote["09. change"];
      const percent = quote["10. change percent"];
      
      return `The current price of ${symbol} is $${price}. It is currently moving by ${change} (${percent}).`;
    } else {
      return `I couldn't find stock data for "${symbol}". Please check if the ticker is correct.`;
    }
  } catch (error) {
    return "Network error: Unable to reach the stock API.";
  }
}