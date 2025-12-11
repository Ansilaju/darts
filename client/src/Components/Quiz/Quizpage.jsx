import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Quizpage.css";
import { BASE_URL } from "../../config";

function QuizPage() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "Which is the smallest unit of data in a computer?",
      options: ["Byte", " Bit", "Kilobyte"],
    },
    {
      id: 2,
      question: " Which memory is volatile in nature?",
      options: ["RAM", " ROM", "Hard Disk"],
    },
    {
      id: 3,
      question: "Which among the following is not an operating system?",
      options: ["Windows", "Linux", "MySQL"],
    },
    {
      id: 4,
      question: " IP in “IP address” stands for?",
      options: ["Internet Protocol", "Internal Process", "Information Path"],
    },
    {
      id: 5,
      question: " In AI, which term refers to “learning from past data”?",
      options: ["Machine Learning", "Data Mining", "Cloud Computing"],
    },
    {
      id: 6,
      question: " Who is known as the “Father of Artificial Intelligence”?",
      options: ["Alan Turing", " John McCarthy", "Bill Gates"],
    },
    {
      id: 7,
      question: "Which of these is an AI-powered virtual assistant?",
      options: ["Siri", "MS Excel", "Google Chrome"],
    },
    {
      id: 8,
      question:
        "Which programming language is most widely used in AI development?",
      options: ["Python", "C", "HTML"],
    },
    {
      id: 9,
      question: "What does NLP in AI stand for?",
      options: [
        "Neural Language Processing",
        "Natural Language Processing",
        "New Learning Process",
      ],
    },
    {
      id: 10,
      question: " Which AI technology is used for recognizing faces in photos?",
      options: ["Computer Vision", " Data Structures", "Operating System"],
    },
  ];

  const handleChange = (qid, option) => {
    setAnswers((prev) => ({ ...prev, [qid]: option }));
  };

  const handleSubmit = async () => {
    try {
      // Convert answers into array of objects with question + answer
      const formattedAnswers = questions.map((q) => ({
        question: q.question,
        answer: answers[q.id] || "Not answered",
      }));

      // Save quiz in backend

      const res = await axios.post(`${BASE_URL}/api/quiz/submit`, {
        answers: formattedAnswers,
      });

      // navigate with quizId
      navigate("/Quizregistration", {
        state: { quizId: res.data.quizId },
      });
    } catch (err) {
      console.error("Quiz submission failed:", err);
      alert("Quiz submission failed");
    }
  };

  return (
    <div className="quizpage-root">
      <div className="quizpage-card">
        <h1 className="quizpage-title">QUIZ</h1>

        <div className="quizpage-questions">
          {questions.map((q) => (
            <div className="quizpage-question" key={q.id}>
              <p className="quizpage-qtext">{q.question}</p>

              <div className="quizpage-options">
                {q.options.map((opt) => (
                  <label className="quizpage-option" key={opt}>
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                      className="quizpage-radio"
                    />
                    <span className="quizpage-opttext">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="quizpage-actions">
          <button className="quizpage-btn" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
