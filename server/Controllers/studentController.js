import Student from "../Models/studentModel.js";
import { Resend } from "resend";

// Initialize Resend once at the top

// Register a student
export const registerStudent = async (req, res) => {
  const { name, email, qualification, phone, course, subcourse } = req.body;

  try {
    // Validation
    if (!name || !email || !qualification || !phone || !course || !subcourse) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newStudent = new Student({
      name,
      email,
      qualification,
      phone,
      course,
      subcourse,
    });

    const savedStudent = await newStudent.save();

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email with Resend
    await resend.emails.send({
      from: process.env.EMAIL_USER, // Must be verified in Resend
      to: process.env.RECEIVER_EMAIL,
      subject: "🎓 New Student Admission",
      html: `
        <h3>New Student Registered</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Subcourse:</strong> ${subcourse}</p>
      `,
    });

    res.status(201).json({
      message: "Student registered successfully and email sent",
      student: savedStudent,
    });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete student by ID
export const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      message: "✅ Student deleted successfully",
      student: deletedStudent,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Server error" });
  }
};
