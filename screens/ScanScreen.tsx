import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getBookByISBN } from '../data/moly';
import BookCard from '../components/BookCard';
import { Book } from '../types/Book';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scannedBook, setScannedBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    const molyBookDetails = await getBookByISBN(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    setScannedBook(molyBookDetails);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scannedBook ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scannedBook && (
        // <Button title={'Tap to Scan Again'} onPress={() => setScannedBook(undefined)} />
        <BookCard book={scannedBook} cbFn={() => setScannedBook(undefined)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
