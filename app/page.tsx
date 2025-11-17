
'use client';

import { useState, useEffect } from 'react';
import FlashcardComponent from './components/Flashcard';
import SuccessScreen from './components/SuccessScreen';

// Beispiel-Flashcards
const initialFlashcards = [
  { id: 1, front: 'Was ist die Hauptstadt von Deutschland?', back: 'Berlin' },
  { id: 2, front: 'Wie viele Kontinente gibt es?', back: '7' },
  { id: 3, front: 'Wer hat die Relativitätstheorie entwickelt?', back: 'Albert Einstein' },
  { id: 4, front: 'Was ist H2O?', back: 'Wasser' },
  { id: 5, front: 'Wie viele Planeten hat unser Sonnensystem?', back: '8' },
  { id: 6, front: 'Welche Farbe hat ein Smaragd?', back: 'Grün' },
  { id: 7, front: 'Wie viele Tage hat ein Schaltjahr?', back: '366' },
  { id: 8, front: 'Was ist die Hauptstadt von Frankreich?', back: 'Paris' },
];

export default function Home() {
  const [currentCards, setCurrentCards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = currentCards[currentIndex];

  const handleCorrect = () => {
    // Karte wurde richtig beantwortet - entfernen aus dem aktuellen Durchgang
    const newCards = currentCards.filter((_, index) => index !== currentIndex);
    setCompletedCount(completedCount + 1);
    setIsFlipped(false);

    if (newCards.length === 0) {
      // Alle Karten erfolgreich abgeschlossen!
      setShowSuccess(true);
    } else {
      // Nächste Karte anzeigen (bleibt am gleichen Index, da wir eine entfernt haben)
      setCurrentCards(newCards);
      // Falls wir am Ende waren, gehe zum Anfang
      if (currentIndex >= newCards.length) {
        setCurrentIndex(0);
      }
    }
  };

  const handleWrong = () => {
    // Karte wurde falsch beantwortet - bleibt im Durchgang
    // Zur nächsten Karte gehen
    setIsFlipped(false);
    
    if (currentIndex < currentCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Zurück zum Anfang, wenn am Ende
      setCurrentIndex(0);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const resetGame = () => {
    setCurrentCards(initialFlashcards);
    setCurrentIndex(0);
    setCompletedCount(0);
    setShowSuccess(false);
    setIsFlipped(false);
  };

  if (showSuccess) {
    return <SuccessScreen totalCards={initialFlashcards.length} onRestart={resetGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header mit Fortschritt */}
        <div className="bg-white rounded-t-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">🎓 Flashcard Lernen</h1>
            <div className="text-right">
              <p className="text-sm text-gray-600">Fortschritt</p>
              <p className="text-2xl font-bold text-purple-600">
                {completedCount} / {initialFlashcards.length}
              </p>
            </div>
          </div>
          
          {/* Fortschrittsbalken */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / initialFlashcards.length) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-600 mt-2">
            Noch {currentCards.length} Karte{currentCards.length !== 1 ? 'n' : ''} im aktuellen Durchgang
          </p>
        </div>

        {/* Flashcard */}
        <div className="bg-white rounded-b-2xl p-8 shadow-lg">
          {currentCard && (
            <FlashcardComponent
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={handleFlip}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
            />
          )}
        </div>
      </div>
    </div>
  );
}
