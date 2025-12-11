import Course from "../Models/courseModel.js";
import { Resend } from "resend";

// Register a student for Zero to Hero course + send email
export const registerZerotohero = async (req, res) => {
  const { Name, Qualification, Email, Phone } = req.body;

  try {
    // Validate required fields
    if (!Name || !Qualification || !Email || !Phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save student data in DB
    const newCourse = new Course({
      Name,
      Qualification,
      Email,
      Phone,
    });

    const savedCourse = await newCourse.save();

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: "🎓 New Student Registered (Zero To Hero - Cyber Security)",
      html: `
        <h3>New Student Enrolled in Zero To Hero (Cyber Security)</h3>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Qualification:</strong> ${Qualification}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Phone:</strong> ${Phone}</p>
      `,
    });

    res.status(201).json({
      message: "Student registered successfully and email sent",
      student: savedCourse,
    });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all students enrolled in Zero To Hero
export const getAllZerotohero = async (req, res) => {
  try {
    const Courses = await Course.find();
    res.status(200).json(Courses);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a student by ID
export const deleteZerotohero = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      message: "✅ Student deleted successfully",
      course: deletedCourse,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Server error" });
  }
};
