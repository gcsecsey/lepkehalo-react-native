import { MOLY_API_KEY } from 'react-native-dotenv';
import type { Book } from '../types/Book';

export const getBookByISBN = async (
  barcode: string
): Promise<Book | undefined> => {
  try {
    const response = await fetch(
      `https://moly.hu/api/book_by_isbn.json?q=${barcode}&key=${MOLY_API_KEY}`
    );
    const json: Book = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
