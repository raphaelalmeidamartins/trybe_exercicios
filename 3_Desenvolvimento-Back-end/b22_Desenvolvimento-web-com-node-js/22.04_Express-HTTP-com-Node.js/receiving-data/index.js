const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const languages = ["Java", "JavaScript", "Python", "GoLang", "Swift"];

app.post("/lang", (req, res) => {
  const { name } = req.body;
  languages.push(name);
  res.status(201).json({ message: `Linguagem ${name} adicionada com sucesso` });
});

app.listen(3001, () => console.log("Aplicativo rodando na porta 3001"));
