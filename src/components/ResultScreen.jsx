import React from 'react';
import { Share2, RotateCcw } from 'lucide-react';

const ResultScreen = ({ userName, vibeKey, vibeData, onRestart }) => {
  const shareResult = () => {
    const text = `Hey! I'm ${userName || 'someone'} and I just took the Vibe Check quiz – I'm ${vibeData.title}! What's your vibe?`;

    if (navigator.share) {
      navigator.share({
        title: 'My Vibe Check Result',
        text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full text-center border border-white/40 shadow-xl">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{userName}, your vibe is...</h2>
        </div>

        <div className={`bg-gradient-to-r ${vibeData.color} p-8 rounded-2xl mb-8 transform hover:scale-105 transition-all duration-300 text-white shadow-lg`}>
          <h3 className="text-3xl font-bold mb-4">{vibeData.title}</h3>
          <p className="text-lg leading-relaxed opacity-95">{vibeData.description}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={shareResult}
            className="flex-1 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Share2 size={20} />
            Share Result
          </button>
          <button
            onClick={onRestart}
            className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <RotateCcw size={20} />
            Take Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
