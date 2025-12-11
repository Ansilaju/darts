import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const quizSchema = new mongoose.Schema({
  answers: [answerSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Quiz", quizSchema);
