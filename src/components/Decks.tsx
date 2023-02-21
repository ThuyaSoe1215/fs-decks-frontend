import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Deck.css";
import { getDeck } from "../api/getDeck";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { decks } from "../api/getDeck";

const Decks = () => {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<decks[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getDeck();
      setDecks(data);
    })();
  }, []);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  };

  const handleDelete = async (id: string) => {
    deleteDeck(id);
    setDecks(decks.filter((deck) => deck._id !== id));
  };

  return (
    <>
      <div className="container">
        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <button onClick={(id) => handleDelete(deck._id)}>X</button>
              <Link style={{ color: "white" }} to={`decks/${deck._id}`}>
                {deck.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <button>Subtmit</button>
      </form>
    </>
  );
};

export default Decks;
