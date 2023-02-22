import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Decks from "./components/Decks";
import DeckDetail from "./components/DeckDetail";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Decks />} />
        <Route path="decks/:deckId" element={<DeckDetail />} />
      </Routes>
    </div>
  );
}

export default App;
