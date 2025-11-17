
'use client';

import { useState } from 'react';

interface FlashcardProps {
  card: {
    id: number;
    front: string;
    back: string;
  };
  isFlipped: boolean;
  onFlip: () => void;
  onCorrect: () => void;
  onWrong: () => void;
}

export default function FlashcardComponent({
  card,
  isFlipped,
  onFlip,
  onCorrect,
  onWrong,
}: FlashcardProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Flashcard */}
      <div
        onClick={onFlip}
        className="relative w-full h-64 cursor-pointer perspective-1000 mb-8"
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Vorderseite */}
          <div
            className={`absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center p-8 backface-hidden ${
              isFlipped ? 'hidden' : ''
            }`}
          >
            <div className="text-center">
              <p className="text-white text-2xl font-semibold mb-4">{card.front}</p>
              <p className="text-white/80 text-sm">👆 Klicke zum Umdrehen</p>
            </div>
          </div>

          {/* Rückseite */}
          <div
            className={`absolute w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl flex items-center justify-center p-8 backface-hidden ${
              !isFlipped ? 'hidden' : ''
            }`}
          >
            <div className="text-center">
              <p className="text-white text-3xl font-bold">{card.back}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons erscheinen nur wenn Karte umgedreht ist */}
      {isFlipped && (
        <div className="flex gap-4 w-full">
          <button
            onClick={onWrong}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            ❌ Falsch
            <span className="block text-sm font-normal mt-1">Kommt wieder</span>
          </button>
          <button
            onClick={onCorrect}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            ✅ Richtig
            <span className="block text-sm font-normal mt-1">Nächste Karte</span>
          </button>
        </div>
      )}

      {!isFlipped && (
        <button
          onClick={onFlip}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          🔄 Antwort zeigen
        </button>
      )}
    </div>
  );
}
