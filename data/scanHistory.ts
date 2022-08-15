import AsyncStorage from '@react-native-async-storage/async-storage';
import type { BookScanHistory, MolyBookDetails } from '../types/Book';

const HISTORY_KEY = 'lepkehalo-history';

export const getHistory = async (): Promise<BookScanHistory> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_KEY);
    console.log(
      'Getting history: ',
      jsonValue != null
        ? JSON.parse(jsonValue).map((b: MolyBookDetails) => b.id)
        : 'parsing error'
    );
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const storeHistory = async (newHistory: BookScanHistory) => {
  try {
    const jsonValue = JSON.stringify(newHistory);
    return AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(jsonValue));
  } catch (error) {
    console.log(error);
  }
};

export const addBook = async (book: MolyBookDetails) => {
  const history = await getHistory();
  history.unshift({ ...book, date: new Date() });
  return storeHistory(history);
};
