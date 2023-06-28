const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();
const mongoose = require('mongoose')
const DbConfig = require('./config/DbConfig');


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: 1024 * 1024 * 10 }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DATABASE CONNECTION
try {
  mongoose.connect(DbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true, })
  console.log("Success");
} catch (err) {
  console.log(`Database can't be connected: ${err}`);
}

// initialize routes
app.use("/api/brand", require("./routes/brand.routes"));
app.use("/api/category", require("./routes/category.routes"));
app.use("/api/group", require("./routes/group.routes"));
app.use("/api/product", require("./routes/product.routes"));

//default error handler
app.use((err, req, res, next) => {
  res.status(500).send({
    "message": "There was a server side error!"
  })
})

app.listen(process.env.SERVER_PORT || 8080, () => {
  console.log("You are connected");
});