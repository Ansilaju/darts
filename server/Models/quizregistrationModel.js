import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  place: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Quizregistration", registrationSchema);
