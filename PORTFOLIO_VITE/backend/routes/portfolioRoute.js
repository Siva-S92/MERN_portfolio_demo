import express from "express";
import {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} from "../models/portfolioModel.js";

const router = express.Router();

router.get("/get-portfoliodata", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      courses: courses,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//to update the introduction part
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Introduction Part Updated Sucessfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});

//to update the About Section
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About Section Updated Sucessfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});


//to Add the New Experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body)
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "New Experience Added Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});


//to Update the an existing Experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true},
    )
    res.status(200).send({
      data: experience,
      success: true,
      message: "Previous Experience Updated Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});


//to Delete the an existing Experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete(
      {_id: req.body._id},
    );
    
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//PROJECT SECTION

//to Add the New Project
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "New Project Added Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//to Update the an existing Project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true},
    )
    res.status(200).send({
      data: project,
      success: true,
      message: "Previous Project Updated Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//to Delete the an existing Project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete(
      {_id: req.body._id},
    );
    
    res.status(200).send({
      data: project,
      success: true,
      message: "The Project Deleted Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});





//COURSES SECTION

//to Add the New Course
router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body)
    await course.save();
    res.status(200).send({
      data: course,
      success: true,
      message: "New Course Added Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//to Update the an existing Course
router.post("/update-course", async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true},
    )
    res.status(200).send({
      data: course,
      success: true,
      message: "Previous Course Updated Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//to Delete the an existing Course
router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete(
      {_id: req.body._id},
    );
    
    res.status(200).send({
      data: course,
      success: true,
      message: "The Course Deleted Successfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});



//to update the Contact part
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "The Contact information Part Updated Sucessfully"
    })
  } catch (error) {
    res.status(500).send(error)
  }
});




export const portfolioRouter = router;
