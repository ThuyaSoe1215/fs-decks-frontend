import React, { useState, useEffect } from "react";

const Form = () => {
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
  }
  return (
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
  );
};

export default Form;
