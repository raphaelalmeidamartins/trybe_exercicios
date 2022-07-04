const express = require("express");
const router = express.Router();

const validateData = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegExp = /[a-z]*@mail.com/i;
  const passwordRegExp = /[0-9]*/;

  if (
    !email.match(emailRegExp) ||
    password.length < 4 ||
    password.length > 8 ||
    !password.match(passwordRegExp)
  ) {
    if (req.path === "/login")
      return next(new Error("email or password is incorrect"));
    if (req.path === "/register") {
      return next(new Error("Invalid data"));
    }
  }

  next();
};

const errorMidleWare = (err, _req, res, next) => {
  res.status(400).json({ message: err.message });
};

router.post(
  "/register",
  validateData,
  (req, res, next) => {
    const { username } = req.body;
    if (username.length <= 3) {
      return next(new Error("Invalid data"));
    }

    res.status(201).json({ message: "user created" });
  },
  errorMidleWare
);

function generateToken() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (const index = 0; index < 12; index += 1)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

router.post(
  "/login",
  validateData,
  (_req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
  },
  errorMidleWare
);

module.exports = router;
