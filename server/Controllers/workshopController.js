import Workshop from "../Models/workshopModel.js";
import { Resend } from "resend";

export const bookWorkshop = async (req, res) => {
  const { name, phone, date } = req.body;

  try {
    if (!name || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save booking to DB
    const newBooking = new Workshop({ name, phone, date });
    const savedBooking = await newBooking.save();
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    await resend.emails.send({
      from: process.env.EMAIL_USER, // your verified sender email in Resend
      to: process.env.RECEIVER_EMAIL,
      subject: "🎓 New Workshop Booking",
      html: `
        <h3>New Workshop Booking</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });

    res.status(201).json({
      message: "Workshop booked successfully and email sent",
      booking: savedBooking,
    });
  } catch (error) {
    console.error("Error booking workshop:", error);
    res.status(500).json({ message: "Server error" });
  }
};
