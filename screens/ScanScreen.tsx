import { openBrowserAsync } from 'expo-web-browser';
import { View as RNView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import {
  getBookDetails,
  getBookIdByISBN,
  getBookDetailsByISBN,
} from '../data/moly';
import BookCard from '../components/BookCard';
import { MolyBookDetails } from '../types/Book';
import { addBook } from '../data/scanHistory';
import { NOT_FOUND } from '../constants/Books';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [lastScannedBook, setLastScannedBook] = useState<
    MolyBookDetails | undefined | string
  >(undefined);
  const [lastScannedISBN, setLastScannedISBN] = useState<string>('');
  const [scanned, setScanned] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: BarCodeScannerResult) => {
    // stop scanning for more barcodes
    setScanned(data);

    if (data !== lastScannedISBN) {
      setLastScannedISBN(data);

      const molyBookDetails = await getBookDetailsByISBN(data);
      if (molyBookDetails instanceof Error) {
        setLastScannedBook(NOT_FOUND);
      } else {
        // let result = await openBrowserAsync(molyBookDetails.url, {
        //   browserPackage: 'com.android.chrome',
        // });

        setLastScannedBook(molyBookDetails);
      }
    } else {
      console.log('This book has just been scanned, scanning again...');
    }

    // continue scanning for barcodes
    setScanned('');
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
        onBarCodeScanned={!scanned ? handleBarCodeScanned : undefined}
        style={StyleSheet.absoluteFillObject}
      />
      {lastScannedBook && <BookCard book={lastScannedBook} />}
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
