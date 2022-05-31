import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getBookDetails, getBookIdByISBN } from '../data/moly';
import BookCard from '../components/BookCard';
import { MolyBookDetails } from '../types/Book';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [lastScannedBook, setLastScannedBook] = useState<
    MolyBookDetails | undefined
  >(undefined);
  const [lastScannedISBN, setLastScannedISBN] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    console.log({ type, data });

    if (data !== lastScannedISBN) {
      const molyBookId = await getBookIdByISBN(data);
      if (typeof molyBookId === 'number') {
        const molyBookDetails = await getBookDetails(molyBookId);
        setLastScannedBook(molyBookDetails);
      } else {
      }
      setLastScannedISBN(data);
    }
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
        barCodeTypes={[
          BarCodeScanner.Constants.BarCodeType.ean13,
          BarCodeScanner.Constants.BarCodeType.ean8,
        ]}
        onBarCodeScanned={lastScannedBook ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {lastScannedBook && (
        <BookCard
          book={lastScannedBook}
          cbFn={() => setLastScannedBook(undefined)}
        />
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
