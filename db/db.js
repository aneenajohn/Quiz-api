const mongoose = require('mongoose');
const db_url = process.env['db_uri'];

async function initializeDBConnection() {
  try{
      await mongoose.connect(db_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      })
      console.log("CONNECTION SUCCESSFUL")
  }
  catch(error){
    console.error(err);
    console.log("mongoose connection failed");
  }
}

module.exports= {initializeDBConnection};