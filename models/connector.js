const mongodb = require('mongodb');
require("dotenv").config({path:'./envfile/config.env'});

const mongoURI = process.env.MONGOURILIVE

let mongoose = require('mongoose');
const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)
//  UoCetsz7K5Ibx3Ud


exports.connection = collection_connection;
