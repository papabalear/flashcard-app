
'use client';

import { useEffect, useState } from 'react';

interface SuccessScreenProps {
  totalCards: number;
  onRestart: () => void;
}

export default function SuccessScreen({ totalCards, onRestart }: SuccessScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      {/* Confetti Effekt */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {['🎉', '🎊', '⭐', '✨', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl w-full text-center transform animate-bounce-in">
        {/* Erfolgs-Emoji */}
        <div className="text-8xl mb-6 animate-pulse">🎉</div>

        {/* Glückwunsch Text */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Herzlichen Glückwunsch!
        </h1>

        <p className="text-2xl text-gray-600 mb-8">
          Du hast alle {totalCards} Karten erfolgreich abgeschlossen! 🚀
        </p>

        {/* Statistik */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 mb-8">
          <p className="text-white text-lg mb-2">Deine Leistung:</p>
          <p className="text-white text-6xl font-bold">{totalCards}/{totalCards}</p>
          <p className="text-white text-xl mt-2">Perfekt! 💯</p>
        </div>

        {/* Motivationstext */}
        <p className="text-gray-600 mb-8 text-lg">
          "Bildung ist die mächtigste Waffe, die du verwenden kannst, um die Welt zu verändern." 
          <br />- Nelson Mandela
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-xl"
          >
            🔄 Nochmal üben
          </button>
        </div>

        {/* Zusätzliche Achievements */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-yellow-100 rounded-lg p-4">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-sm font-semibold text-gray-700">Champion</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4">
            <div className="text-3xl mb-2">🧠</div>
            <p className="text-sm font-semibold text-gray-700">Wissensheld</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-gray-700">Schnelldenker</p>
          </div>
        </div>
      </div>
    </div>
  );
}
