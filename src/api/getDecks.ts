import { API_URL } from "./config";
export type decks = {
  _id: string;
  cards: string[];
  title: string;
};

export async function getDecks(): Promise<decks[]> {
  const response = await fetch(`${API_URL}/decks`);
  return response.json();
}
