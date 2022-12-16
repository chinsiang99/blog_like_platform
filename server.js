const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { expressErrorHandler } = require("./middleware/error_handlerMiddleware");
const router = require('./routes/index');
// const firebaseAuth = require('./config/dbConnection');
require('./config/dbConnection');
const app = express();

// to handle json
app.use(express.json());

// to handle form data in body
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use("/", router);



app.use(function(req, res, next) {
  res.status(404);
  throw new Error("Not found");
});

app.use(expressErrorHandler);
// console.log("hello");

app.listen(4000, ()=> console.log("HELLO PORT 4000"));