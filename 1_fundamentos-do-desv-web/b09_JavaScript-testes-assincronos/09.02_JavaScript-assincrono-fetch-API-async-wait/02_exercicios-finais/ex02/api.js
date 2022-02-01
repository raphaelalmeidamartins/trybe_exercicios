const currenciesList = document.getElementById('currencies-list');

async function getCurrencies() {
  try {
    const arrayCurrencies = await fetch(`https://api.coincap.io/v2/assets`);
    const response = await arrayCurrencies.json().data;
    if (!response || response.length === 0) throw new Error('failed to obtain currencies\' information');
    response
      .filter((_, index) => index < 10)
      .forEach((currency) => {
        const newLi = document.createElement('li');
        newLi.textContent = `${currency.name} (${currency.symbol}): ${parseFloat(currency.priceUsd.toFixed(2))}`;
        currenciesList.appendChild(newLi);
      });    
  } catch (error) {
    const newLi = document.createElement('li');
    newLi.textContent = `Something went wrong: ${error.message}`;
    currenciesList.appendChild(newLi);
  }
}

window.onload = getCurrencies;
