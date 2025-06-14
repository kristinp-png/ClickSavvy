// random-quotes.js
const quotes = [
    "Stay savvy, stay safe online.",
    "Confidence is your best password.",
    "Click smart. Live smarter.",
    "Secure your future with strong passwords.",
    "Digital queens protect their data!"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").textContent = quotes[randomIndex];
  }
  
  // Optionally, display a random quote on page load
  window.onload = getRandomQuote;
  