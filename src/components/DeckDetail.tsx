import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCard } from "../api/createCard";
import "../App.css";
import "./DeckDetail.css";
import { decks } from "../api/getDecks";
import { getSingleDeck } from "../api/getSingleDeck";
import { deleteCard } from "../api/deleteCard";

const DeckDetail = () => {
  const [deck, setDeck] = useState<decks | null>(null);
  const [cards, setCards] = useState<String[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const { cards: serverCard } = await createCard(deckId!, text);
    setCards(serverCard);
    setText("");
  };

  useEffect(() => {
    (async () => {
      if (!deckId) return;
      const newDeck = await getSingleDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    })();
  }, [deckId]);

  const handleDeleteCard = async (deckId: string, index: number) => {
    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
  };

  return (
    <div className="App">
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteCard(deckId!, index)}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="card">Card Text</label>
        <input
          id="card"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button>Creat Card</button>
      </form>
    </div>
  );
};

export default DeckDetail;
