import { API_URL } from "./config";
import { decks } from "./getDecks";

export const getSingleDeck = async (deckId: string): Promise<decks> => {
  const response = await fetch(`${API_URL}/decks/${deckId}`);
  return response.json();
};
