const { connection } = require("../models/connector.js");


// Save movie details to the database
 exports.saveMovieDetails = async(movieDetails,res)=>{
    //this function creates a document in the collection based on the data send by the user in the post request//
    const mongoDbReply=  await connection.create(movieDetails)
    if(!('createdAt' in mongoDbReply)){
      res.status(500).send()
    }
    else{
      res.status(200).send(movieDetails)
    }
}


// Get the last booking details from the database
  exports.getLastMovieDetails = (res) => {
    connection.findOne()
      .sort({ createdAt: -1 })
      .exec()
      .then((post) => {
        if (!post) {
          res.status(404).json({ message: "No previous booking found" });
        } else {
          const lastMovieDetails = {
            movie: post.movie,
            slot: post.slot,
            seats: post.seats,
          };
          res.status(200).json(lastMovieDetails);
        }
      })
      .catch((error) => {
        console.error("Failed to retrieve last movie details:", error);
        res.status(500).json({ error: "An error occurred while retrieving the last booking details" });
      });
  };
