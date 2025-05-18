


import { useState } from 'react';

const questions = [
  {
    q: "What's Anshuman’s favorite way to celebrate?",
    a: ["Adventure", "Food", "Netflix", "Party"],
    correct: 1,
  },
  {
    q: "What's his birthday month?",
    a: ["January", "May", "August", "December"],
    correct: 0,
  },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (i: number) => {
    if (i === questions[index].correct) setScore(score + 1);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-yellow-100 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">🧠 Birthday Quiz</h2>
      {!done ? (
        <>
          <p className="text-lg mb-6">{questions[index].q}</p>
          {questions[index].a.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="block w-full py-2 my-2 bg-white rounded-lg border hover:bg-yellow-200 transition"
            >
              {opt}
            </button>
          ))}
        </>
      ) : (
        <div className="text-xl font-semibold text-green-700">
          🎉 You scored {score}/{questions.length}!
        </div>
      )}
    </div>
  );
};

export default Quiz;
