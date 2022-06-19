const express = require("express");

const app = express();

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/drinks", (req, res) => {
  res.json(drinks);
});

app.get("/drinks/search", (req, res) => {
  const { name } = req.query;
  let { minPrice } = req.query;
  if (!minPrice) minPrice = 0;
  const filteredDrinks = drinks.filter(
    (drk) => drk.name.includes(name) && drk.price >= minPrice
  );
  if (!filteredDrinks.length) {
    return res.status(404).json({ message: "No drink found!" });
  }
  res.status(200).json(filteredDrinks);
});

app.get("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drk) => drk.id === +id);

  if (!drink) return res.status(404).json({ message: "Drink not found!" });

  res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log("App running on 3001");
});
