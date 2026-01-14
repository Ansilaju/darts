import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true, sparse: true },

  Place: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
