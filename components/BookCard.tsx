import { Text, View } from '../components/Themed';
import { StyleSheet, Image, Button } from 'react-native';
import { MolyBookDetails } from '../types/Book';

export default function BookCard({
  book: { authors, title, cover },
  cbFn,
}: {
  book: MolyBookDetails;
  cbFn: () => void;
}) {
  return (
    <>
      <View style={styles.cardContainer}>
        <Image
          style={styles.coverImg}
          source={{
            uri: cover,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.authorText}>
            {authors.map((a) => a.name).join(' - ')}
          </Text>
        </View>
      </View>
      <Button title={'Tap to Scan Again'} onPress={cbFn} />
    </>
  );
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
