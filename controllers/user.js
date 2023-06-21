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
exports.getLastMovieDetails = (res) =>{
  //this function finds the latest created document in the collection and send it to display in the frontend as last booking details//
      connection.findOne().sort({createdAt: -1}).exec((err,post)=>{
        // console.log(err,'post',post)
        if(err){
          res.status(500).send()
          
        }
        else if(!post){
          res.status(404).send()
        }
        else{
          let lastMovieDetails={}
          lastMovieDetails['movie'] = post.movie;
          lastMovieDetails['slot'] = post.slot;
          lastMovieDetails['seats'] = post.seats;
          res.status(200).send(lastMovieDetails)
        }
    })
  
 
}
