const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const students19A = [
  {
    id: 1,
    name: "Raphael Martins",
  },
  {
    id: 2,
    name: "Lala Namatela",
  },
  {
    id: 3,
    name: "Lua Octaviano",
  },
  {
    id: 4,
    name: "Danillo Gonçalves",
  },
  {
    id: 5,
    name: "Dani Olimpo",
  },
  {
    id: 6,
    name: "Rafa Elias",
  },
];

app.get("/students", (req, res) => {
  res.status(200).send(students19A);
});

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const studentIndex = students19A.findIndex((student) => (student.id = id));

  if (studentIndex === undefined)
    return res
      .status(404)
      .json({ message: `Estudante com id: ${id} não localizado` });

  students19A[studentIndex] = { id, name };
  res.status(204).end();
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const studentIndex = students19A.findIndex((student) => (student.id = id));

  if (studentIndex === undefined)
    return res
      .status(404)
      .json({ message: `Estudante com id: ${id} não localizado` });

  students19A.splice(id, 1);

  res.status(204).end();
});

app.listen(3001, () => console.log("Aplicação sendo executada na porta 3001"));
