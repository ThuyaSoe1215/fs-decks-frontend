import { API_URL } from "./config";
export type decks = {
  _id: string;
  title: string;
};

export async function getDeck(): Promise<decks[]> {
  const response = await fetch(`${API_URL}/decks`);
  return response.json();
}
