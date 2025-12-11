import Quizregistration from "../Models/quizregistrationModel.js";
import { Resend } from "resend";

export const registerUser = async (req, res) => {
  const { name, age, place, phone } = req.body;

  try {
    // Validate required fields
    if (!name || !age || !place || !phone) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // Save user in DB
    const newUser = new Quizregistration({ name, age, place, phone });
    const savedUser = await newUser.save();

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailResponse = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: "New User Registration",
      html: `
        <h3>New User Registered</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Place:</strong> ${place}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    if (emailResponse.error) {
      console.warn("Email sending error:", emailResponse.error);
    }

    res.status(201).json({
      message: "User registered and email sent successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
