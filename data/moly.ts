import { MOLY_API_KEY } from 'react-native-dotenv';
import type { MolyBookDetails } from '../types/Book';

const BOOK_NOT_FOUND = 'Book not found';

export const getBookIdByISBN = async (isbn: string): Promise<number> => {
  const NO_BOOK = 0; // this is a non-existend book ID

  try {
    const response = await fetch(
      `https://moly.hu/api/book_by_isbn.json?q=${isbn}&key=${MOLY_API_KEY}`
    );
    const json = await response.json();

    // if the response is empty, the book is not found
    if (Object.keys(json).length !== 0) {
      return json.id;
    }
  } catch (error) {
    console.error(error);
  }
  return NO_BOOK;
};

export const getBookDetails = async (
  id: number
): Promise<MolyBookDetails | Error> => {
  try {
    const response = await fetch(
      `https://moly.hu/api/book/${id}.json?key=${MOLY_API_KEY}`
    );
    if (response.status === 200) {
      const json = await response.json();
      return json.book;
    }
  } catch (error) {
    console.error(error);
  }
  return new Error('Book not found');
};

export const getBookDetailsByISBN = async (isbn: string) => {
  const id = await getBookIdByISBN(isbn);
  return getBookDetails(id);
};
