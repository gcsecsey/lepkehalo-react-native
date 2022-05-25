import { Text, View } from '../components/Themed';
import { StyleSheet, Button } from 'react-native';
import { Book } from '../types/Book';

export default function BookCard({
  book,
  cbFn,
}: {
  book: Book;
  cbFn: () => void;
}) {
  return (
    <View style={styles.cardContainer}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.cover}</Text>
      <Button title={'Tap to Scan Again'} onPress={cbFn} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 20,
    margin: 5,
  },
});
