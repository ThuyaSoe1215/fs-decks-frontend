import { API_URL } from "./config";
import { decks } from "./getDecks";

export const deleteCard = async (
  deckId: string,
  index: number
): Promise<decks> => {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
};
