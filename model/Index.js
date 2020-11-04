const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/Edureka",{useNewUrlParser: true},(error)=>{
  if(!error){
      console.log("Connection successfull!")
  }
  else{
      console.log("Connection failed!");
  }
});


const Course = require("./course.model");




