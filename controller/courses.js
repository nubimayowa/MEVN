const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get("/add", (req,res)=>{

    res.render("add-course")

})
router.get("/test", (req,res)=>{

    res.render("test")

})
router.post("/add", (req,res)=>{

   var course = new CourseModel();
course.courseName = req.body.courseName
course.courseDuration =req.body.courseDuration
course.courseFees =req.body.courseFees
course.courseId =Math.ceil(Math.random()* 100000000) + "";

course.save((err,doc)=>{
    if(!err){
        // res.redirect("/course/list");
        res.json({message: "Successfully created", status: "ok"})

    }
    else{
        res.send("An Error Occurred");

    }
})
    // res.render("add-course");
});
router.get("/list", (req,res)=>{


    CourseModel.find((err, docs)=>{
        if(!err){
            // console.log(docs)
          res.render("list", {data: docs})
            //res.send("Course Controller");

        }
        else{
            res.render("Error")
        }

    });

  

})

module.exports = router;