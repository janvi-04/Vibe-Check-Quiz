import React from 'react';

const WelcomeScreen = ({ userName, setUserName, onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center border border-white/30 shadow-xl">
        <div className="mb-6">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Vibe Check
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover your current energy & aesthetic
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="What's your name?"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/60 border border-purple-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-8 p-4 bg-white/30 rounded-xl border border-white/20">
          <p className="text-sm text-gray-600 mb-1">Built by</p>
          <p className="font-semibold text-lg text-gray-800">Janvi Rajkeshrikumar Mehta</p>
          <p className="text-sm text-gray-600">B.Tech CSE, JIIT Noida</p>
        </div>

        <button
          onClick={onStart}
          disabled={!userName.trim()}
          className={`w-full font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform shadow-lg ${
            userName.trim()
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {userName.trim() ? `Let's go, ${userName}! ✨` : 'Enter your name first ✨'}
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
