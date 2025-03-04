const express = require("express");
const app = express();

const path = require("path");
const cookieParser = require("cookie-parser");

/**Configure environment variables */
const dotenv = require("dotenv");
dotenv.config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**Parse application/x-www-form-urlencoded */
// const bodyParser = require("body-parser");
// // app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));

// parse application/json
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./app_server/routes/index");

/**routes */
app.use("/", indexRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
