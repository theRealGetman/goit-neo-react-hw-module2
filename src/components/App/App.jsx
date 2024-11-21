import { useEffect, useState } from "react";
import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem("feedback");
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total === 0 ? 0 : Math.round((feedback.good / total) * 100);

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback({ ...feedback, good: feedback.good + 1 });
        break;
      case "neutral":
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case "bad":
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
      case "reset":
        setFeedback({ good: 0, neutral: 0, bad: 0 });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Description />
      <Options total={total} onUpdateFeedback={updateFeedback} />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification label="No feedback yet" />
      )}
    </>
  );
}

export default App;
