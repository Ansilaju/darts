import User from "../Models/userModel.js";
import { Resend } from "resend";

// Initialize Resend using .env key

// Register user + send email
export const registerUser = async (req, res) => {
  const { Name, Email, Place, PhoneNumber } = req.body;

  try {
    // Validate required fields
    if (!Name || !Place || !PhoneNumber) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // Save user in DB
    const newUser = new User({
      Name,
      Email,
      Place,
      PhoneNumber,
    });

    const savedUser = await newUser.save();

    const resend = new Resend(process.env.RESEND_API_KEY);
    // Send email notification
    const emailResponse = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: "New User Registration",
      html: `
        <h3>New User Registered</h3>
        <p><strong>Name:</strong> ${Name || "N/A"}</p>
        <p><strong>Email:</strong> ${Email || "N/A"}</p>
        <p><strong>District:</strong> ${Place}</p>
        <p><strong>Phone Number:</strong> ${PhoneNumber}</p>
      `,
    });

    if (emailResponse.error) {
      console.warn("Resend email error:", emailResponse.error);
    }

    res.status(201).json({
      message: "User registered and email sent successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "✅ User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};
