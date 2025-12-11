import Quiz from "../Models/quizModel.js";

export const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quiz = new Quiz({ answers });
    await quiz.save();

    res.status(200).json({ message: "Quiz saved", quizId: quiz._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Quiz submission failed" });
  }
};
