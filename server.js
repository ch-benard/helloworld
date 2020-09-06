const express = require("express");
const app = express();

// The code below will display 'Hello World!' to the browser when you go to http://localhost:3000
app.get("/", function (req, res) {
  const unChiffre = 5;
  const unAutreChiffre = 7;
  const somme = unChiffre + unAutreChiffre;
  res.send("Hello World! La somme est de " + somme);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
