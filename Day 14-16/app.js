var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { redisClient, RedisStore, session } = require("./database/redis");

require("./database/mongo");

var passport = require("passport");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//making redis session middle ware forredis client
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secretKey123",
    resave: false,
    saveUnintialized: false,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 10, // session max age in miliseconds
    },
  })
);

app.use(passport.initialize());
require("./middlewares/passport")(passport);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/passport", require("./routes/passport"));
app.use("/products", require("./routes/products"));
app.use("/stream", require("./routes/stream"));
app.use("/stripe", require("./routes/stripe")); //payment

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
