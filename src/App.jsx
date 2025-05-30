import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "It's Monday morning. What's your first thought?",
      options: [
        { text: "Let's conquer this week! 💪", vibe: "locked-in" },
        { text: "Coffee first, everything else later ☕", vibe: "chill" },
        { text: "Why do Mondays exist? 😴", vibe: "cozy" },
        { text: "Time to create something amazing! ✨", vibe: "creative" }
      ]
    },
    {
      question: "Your ideal Friday night:",
      options: [
        { text: "Netflix, snacks, and zero human interaction", vibe: "cozy" },
        { text: "Spontaneous adventure with friends", vibe: "chaos" },
        { text: "Working on that side project", vibe: "locked-in" },
        { text: "Vibing to music and daydreaming", vibe: "creative" }
      ]
    },
    {
      question: "Someone asks for your weekend plans:",
      options: [
        { text: "I have a color-coded schedule", vibe: "locked-in" },
        { text: "Plans? We don't do plans here", vibe: "chaos" },
        { text: "Probably staying in my pajamas", vibe: "cozy" },
        { text: "Whatever feels right in the moment", vibe: "chill" }
      ]
    },
    {
      question: "Your phone battery is at 5%. You:",
      options: [
        { text: "Panic! How will I survive?", vibe: "chaos" },
        { text: "Meh, guess I'm off the grid now", vibe: "chill" },
        { text: "Rush to find the nearest charger", vibe: "locked-in" },
        { text: "Take it as a sign to be present", vibe: "creative" }
      ]
    },
    {
      question: "Your dream workspace:",
      options: [
        { text: "Minimalist desk with perfect lighting", vibe: "locked-in" },
        { text: "Cozy blanket fort with fairy lights", vibe: "cozy" },
        { text: "Chaotic desk covered in sticky notes", vibe: "chaos" },
        { text: "Anywhere with good vibes and music", vibe: "chill" }
      ]
    },
    {
      question: "Group project energy:",
      options: [
        { text: "I'll just do it all myself", vibe: "locked-in" },
        { text: "Let's brainstorm wild ideas!", vibe: "creative" },
        { text: "Can we do this over text?", vibe: "cozy" },
        { text: "Whatever, it'll work out somehow", vibe: "chill" }
      ]
    },
    {
      question: "Your relationship with deadlines:",
      options: [
        { text: "Done a week early, obviously", vibe: "locked-in" },
        { text: "What deadline? *scrambles*", vibe: "chaos" },
        { text: "I work better under pressure", vibe: "creative" },
        { text: "It'll get done when it gets done", vibe: "chill" }
      ]
    },
    {
      question: "When inspiration strikes:",
      options: [
        { text: "I drop everything and create", vibe: "creative" },
        { text: "I make a detailed plan first", vibe: "locked-in" },
        { text: "I bookmark it for later", vibe: "cozy" },
        { text: "I let it flow naturally", vibe: "chill" }
      ]
    }
  ];

  const vibeTypes = {
    "locked-in": {
      title: "🎯 Locked In Mode",
      description: "You're the productivity machine everyone wishes they could be. Main character energy with a side of hustle.",
      color: "from-indigo-400 to-purple-500"
    },
    "creative": {
      title: "✨ Creative Genius",
      description: "You turn ideas into art and daydreams into plans. Visionary vibes only.",
      color: "from-pink-400 to-purple-400"
    },
    "chill": {
      title: "😎 Chill Vibes Only",
      description: "Nothing phases you. You ride the waves of life like a pro. Zen master in disguise.",
      color: "from-blue-300 to-indigo-400"
    },
    "cozy": {
      title: "🏠 Cozy Hermit",
      description: "Soft blankets, warm drinks, and peace. You make any place feel like home.",
      color: "from-purple-300 to-indigo-400"
    },
    "chaos": {
      title: "🔥 Chaos Coordinator",
      description: "You thrive in the unexpected. Fast-paced, energetic, and a little wild.",
      color: "from-pink-500 to-red-500"
    }
  };

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (allAnswers) => {
    const counts = {};
    for (const answer of allAnswers) {
      counts[answer.vibe] = (counts[answer.vibe] || 0) + 1;
    }

    const topVibe = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(topVibe);
    setScreen('result');
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setResult(null);
    setScreen('welcome');
    setUserName('');
  };

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen onStart={() => setScreen('quiz')} userName={userName} setUserName={setUserName} />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          userName={userName}
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {screen === 'result' && result && (
        <ResultScreen
          userName={userName}
          vibeKey={result}
          vibeData={vibeTypes[result]}
          onRestart={resetQuiz}
        />
      )}
    </>
  );
};

export default App;
