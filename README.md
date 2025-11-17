
# 🎓 Flashcard Lernen - Duolingo Style

Eine moderne Flashcard-App mit Duolingo-inspirierter Lernmechanik.

## ✨ Features

- **Duolingo-Lernmechanik**: 
  - ✅ Richtig beantwortete Karten verschwinden sofort
  - ❌ Falsch beantwortete Karten bleiben im aktuellen Durchgang
  - 🎉 Erfolgsmeldung nach Abschluss aller Karten

- **Interaktive Flashcards**: 
  - Klickbare Karten zum Umdrehen
  - Animierte Übergänge
  - Visuelles Feedback

- **Fortschrittsverfolgung**:
  - Echtzeit-Fortschrittsbalken
  - Zähler für abgeschlossene Karten
  - Übersicht über verbleibende Karten

- **Motivierender Erfolgsscreen**:
  - Confetti-Animation
  - Achievement-Badges
  - Inspirierendes Zitat

## 🚀 Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## 🎮 Wie es funktioniert

1. **Karte anzeigen**: Sieh dir die Frage auf der Vorderseite an
2. **Umdrehen**: Klicke auf die Karte, um die Antwort zu sehen
3. **Bewerten**: 
   - **Richtig** ✅: Die Karte verschwindet, nächste erscheint automatisch
   - **Falsch** ❌: Die Karte bleibt im Pool und kommt später wieder
4. **Erfolg**: Wenn alle Karten richtig beantwortet wurden, erscheint der Erfolgsscreen!

## 🛠️ Technologie-Stack

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Hooks** - State Management

## 📝 Eigene Flashcards hinzufügen

Bearbeite die `initialFlashcards` in `app/page.tsx`:

```typescript
const initialFlashcards = [
  { id: 1, front: 'Deine Frage', back: 'Deine Antwort' },
  // Füge weitere Karten hinzu...
];
```

## 🎨 Anpassungen

- **Farben**: Bearbeite die Tailwind-Klassen in den Komponenten
- **Animationen**: Passe die CSS-Animationen in `globals.css` an
- **Texte**: Alle Texte können direkt in den Komponenten geändert werden

## 📦 Build für Production

```bash
npm run build
npm start
```

## 🤝 Beitragen

Contributions sind willkommen! Erstelle einfach einen Pull Request.

## 📄 Lizenz

MIT License - Nutze die App wie du möchtest!

---

Viel Erfolg beim Lernen! 🚀📚
