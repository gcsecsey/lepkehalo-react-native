import { MOLY_API_KEY } from 'react-native-dotenv';
import type { MolyBookDetails } from '../types/Book';

export const getBookIdByISBN = async (
  barcode: string
): Promise<number | undefined> => {
  try {
    const response = await fetch(
      `https://moly.hu/api/book_by_isbn.json?q=${barcode}&key=${MOLY_API_KEY}`
    );
    const json = await response.json();
    return json.id;
  } catch (error) {
    console.error(error);
  }
};

export const getBookDetails = async (
  id: number
): Promise<MolyBookDetails | undefined> => {
  try {
    const response = await fetch(
      `https://moly.hu/api/book/${id}.json?key=${MOLY_API_KEY}`
    );
    const json = await response.json();
    return json.book;
  } catch (error) {
    console.error(error);
  }
};
