const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDay();

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  res.render("list", {
    kindOfDay: weekdays[day]
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
