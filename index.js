const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config({path:'./envfile/config.env'});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
const { getLastMovieDetails, saveMovieDetails } = require("./controllers/user.js");



app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// routes

const bookingRoutes = express.Router();

// middleware
app.use("/api/bookmymovie", bookingRoutes);

bookingRoutes.route("/").get((req, res) => {
  getLastMovieDetails(res);
});

bookingRoutes.route("/booking").post((req, res) => {
  const dataReceived = req.body;
  saveMovieDetails(dataReceived, res);
});

const port = 8080

    
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   