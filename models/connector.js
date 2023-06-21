const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://sourabhrr3344:UoCetsz7K5Ibx3Ud@cluster0.pmqxvol.mongodb.net/?retryWrites=true&w=majority"

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
