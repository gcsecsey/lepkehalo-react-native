import { Text, View as ThemedView } from '../components/Themed';
import { StyleSheet, Image, Button, View } from 'react-native';
import { MolyBookDetails } from '../types/Book';
import { openBrowserAsync } from 'expo-web-browser';
import { NOT_FOUND } from '../constants/Books';

export default function BookCard({ book }: { book: MolyBookDetails | string }) {
  if (typeof book === 'string') {
    return (
      <ThemedView>
        <Text>Book Not Found</Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView>
      <View style={styles.cardContainer}>
        <Image
          style={styles.coverImg}
          source={{
            uri: book.cover,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{book.title}</Text>
          <Text style={styles.authorText}>
            {book.authors.map((a) => a.name).join(' - ')}
          </Text>
          <Button title={'Most olvasom'} onPress={() => handleRead(book.id)} />
          <Button title={'Megszereztem'} onPress={() => handleOwn(book.id)} />
        </View>
      </View>
      {/* <Button title={'Tap to Scan Again'} onPress={cbFn} /> */}
    </ThemedView>
  );
}

export function handleRead(id: number) {
  openBrowserAsync('https://moly.hu/olvasasok/uj?book_id=' + id, {
    browserPackage: 'com.android.chrome',
  });
}

export function handleOwn(id: number) {
  console.log('own');
  openBrowserAsync('https://moly.hu/magankonyvtar/uj?book_id=' + id, {
    browserPackage: 'com.android.chrome',
  });
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 20,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 16,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  coverImg: {
    width: 50,
    height: 75,
    marginRight: 20,
  },
});
