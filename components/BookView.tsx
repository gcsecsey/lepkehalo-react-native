import { Text, Icon, View as ThemedView } from '../components/Themed';
import { StyleSheet, Image, Button, View } from 'react-native';
import { MolyBookDetails } from '../types/Book';
import { openTabAsync } from '../navigation/Browser';
import { NOT_FOUND } from '../constants/Books';
import { Headings } from '../constants/Headings';
import BookButton from './Book/BookButton';

import {
  ADD_NEW_BOOK_URL,
  ADD_NEW_COPY_URL,
  ADD_NEW_READ_URL,
  ADD_TO_WAITLIST_URL,
  ADD_TO_WISHLIST_URL,
  ADD_TO_SHELF_URL,
} from '../constants/Moly';

export default function BookCard({ book }: { book: MolyBookDetails | string }) {
  if (typeof book === 'string') {
    return (
      <View
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
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.bookCardContainer}>
        <Image
          resizeMode="contain"
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
        </View>
        <View style={styles.buttonsView}>
          <BookButton
            icon="book-open"
            title="Olvasom"
            onPress={() => openTabAsync(ADD_NEW_READ_URL + book.id)}
            color="teal"
          />
          <BookButton
            icon="bag"
            title="Megszereztem"
            onPress={() => openTabAsync(ADD_NEW_COPY_URL + book.id)}
            color="blue"
          />

          <BookButton
            icon="clock"
            title="Várólista"
            onPress={() => openTabAsync(ADD_TO_WAITLIST_URL + book.id)}
            color="orange"
          />

          {/* <BookButton
            icon="cards-heart-outline"
            title="Kívánságlista"
            onPress={() => openTabAsync(ADD_TO_WISHLIST_URL + book.id)}
          />

          <BookButton
            icon="bookshelf"
            title="Polcra"
            onPress={() => openTabAsync(ADD_TO_SHELF_URL + book.id)}
          /> */}
          {/* <BookButton
          icon="dots-horizontal-circle-outline"
          title=""
          onPress={() => openTabAsync(ADD_NEW_COPY_URL + book.id)}
        /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  bookCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {
    width: '100%',
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
    width: 75,
    height: 100,
    marginRight: 8,
  },
  buttonsView: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
