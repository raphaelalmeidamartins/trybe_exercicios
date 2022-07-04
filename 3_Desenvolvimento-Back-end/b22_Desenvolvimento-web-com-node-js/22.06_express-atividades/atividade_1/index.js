const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const router = require("./router");
app.use("/user", router);

app.listen(3001, () => console.log("App rodando na porta 3001"));
