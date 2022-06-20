const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Exercícios de 1 a 5

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(204).json({ message: `Hello, ${name}` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age < 17) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// Exercícios de 6 a 8

const simpsons = fs.readFileSync("./simpsons.json");

app.get("/simpsons", (req, res) => {
  res.status(200).json(simpsons);
});

app.get("simpsons/:id", (req, res) => {
  const { id } = req.params;
  const selectedSimpson = simpsons.find((member) => (member.id = id));
  if (!selectedSimpson)
    return res.status(404).json({ message: "Simpson not found" });
  res.status(200).json(selectedSimpson);
});

app.post("/simpsons", (req, res) => {
  const { id, name } = req.body;
  if (simpsons.some((member) => (member.id = id)))
    return res.status(409).json({ message: "This id already exists" });

  simpsons.push({ id, name });
  fs.writeFileSync("./simpsons.json", JSON.stringify(simpsons));

  res.status(204).end();
});

// porta

app.listen(3001, () => console.log('Aplicação rodando na porta 3001'));
