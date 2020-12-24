const express = require("express");
const app = express();

//config
const { config } = require("./config");
const morgan = require('morgan');
const cors = require('cors');

//config
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//db 
const Mongoose = require('./db/mongo')
let mongoDB = new Mongoose()
mongoDB.connect()

const categoriesApi = require('./routes/categories')
//routes
categoriesApi(app)

app.listen(config.port, () => {
  console.log(`Server on: http://localhost:${config.port}`);
});
