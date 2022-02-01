const currenciesList = document.getElementById('currencies-list');

async function getCurrencies() {
  const arrayCurrencies = await fetch(`https://api.coincap.io/v2/assets`);
  const response = await arrayCurrencies.json();
  response.data
    .filter((_, index) => index < 10)
    .forEach((currency) => {
      const newLi = document.createElement('li');
      newLi.textContent = `${currency.name} (${currency.symbol}): ${currency.priceUsd}`;
      currenciesList.appendChild(newLi);
    });
}

window.onload = getCurrencies;
