import React, { useState, useEffect } from "react";
import "./Deck.css";

type decks = {
  _id: string;
  title: string;
};

const Decks = () => {
  const [decks, setDecks] = useState<decks[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/decks");
      const data = await response.json();
      setDecks(data);
    })();
  }, []);

  return (
    <div className="container">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Decks;
