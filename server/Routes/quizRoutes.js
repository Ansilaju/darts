import express from "express";
import { submitQuiz } from "../Controllers/quizController.js";

import { registerUser } from "../Controllers/quizregistrationController.js";

const router = express.Router();

router.post("/submit", submitQuiz);
router.post("/quizRegistration", registerUser);

export default router;
