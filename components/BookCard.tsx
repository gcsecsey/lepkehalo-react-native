import { Text, View as ThemedView } from '../components/Themed';
import { StyleSheet, Image, Button, View } from 'react-native';
import { MolyBookDetails } from '../types/Book';
import { openTabAsync } from '../navigation/Browser';
import { NOT_FOUND } from '../constants/Books';
import { Headings } from '../constants/Headings';

import {
  ADD_NEW_BOOK_URL,
  ADD_NEW_COPY_URL,
  ADD_NEW_READ_URL,
} from '../constants/Moly';

export default function BookCard({ book }: { book: MolyBookDetails | string }) {
  if (typeof book === 'string') {
    return (
      <ThemedView
        style={{
          ...styles.cardContainer,
          alignItems: 'center',
        }}
      >
        <Text style={Headings.h1}>This book is not on Moly.hu yet!</Text>
        <Text style={Headings.subheading}>Would you like to add it?</Text>
        <Button
          title={'Add new book'}
          onPress={() => openTabAsync(ADD_NEW_BOOK_URL)}
        />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.cardContainer}>
      <View style={styles.bookCardContainer}>
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
          <Button
            title={'New read'}
            onPress={() => openTabAsync(ADD_NEW_READ_URL + book.id)}
          />
          <Button
            title={'New copy'}
            onPress={() => openTabAsync(ADD_NEW_COPY_URL + book.id)}
          />
        </View>
      </View>
      {/* <Button title={'Tap to Scan Again'} onPress={cbFn} /> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 20,
    margin: 5,
    display: 'flex',
  },
  bookCardContainer: {
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
