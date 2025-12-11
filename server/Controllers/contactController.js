import Contact from "../Models/contactModel.js";
import { Resend } from "resend";

// Initialize Resend

export const contactController = async (req, res) => {
  const { name, phone, message } = req.body;

  try {
    // Save contact in DB
    const newContact = new Contact({
      name,
      phone,
      message,
    });
    const savedContact = await newContact.save();
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    await resend.emails.send({
      from: process.env.EMAIL_USER, // Verified sender in Resend
      to: process.env.RECEIVER_EMAIL,
      subject: "🎓 User Contacted",
      html: `
        <h3>User Contacting</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(201).json({
      message: "Message sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Server error" });
  }
};
