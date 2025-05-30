import React from 'react';

const QuizScreen = ({ userName, question, questionIndex, total, onAnswer }) => {
  const progress = ((questionIndex + 1) / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/40 shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">
              Question {questionIndex + 1} of {total}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/60 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-purple-400 to-indigo-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Hey {userName}! {question.question}
        </h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full p-4 bg-white/60 hover:bg-white/80 rounded-xl text-left transition-all duration-300 border border-white/40 hover:border-purple-200 hover:scale-102 text-gray-700 hover:text-gray-900"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
