const app = require("./app");

// const express = require("express");
// const app = express();
// app.all("/", (req, res) => {
//   console.log("Just got a request!");
//   res.send("Alli is boy");
// });
app.listen(process.env.PORT || 3500);
