const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
// const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./models/connector.js");
const cors = require('cors');
const { getLastMovieDetails, saveMovieDetails } = require("./controllers/user.js");
app.use(cors())


// routes

const bookingRoutes = express.Router();

// middleware
app.use("/bookmymovie", bookingRoutes);

bookingRoutes.route("/").get((req, res) => {
  getLastMovieDetails(res);
});

bookingRoutes.route("/booking").post((req, res) => {
  const dataReceived = req.body;
  saveMovieDetails(dataReceived, res);
});

    
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   