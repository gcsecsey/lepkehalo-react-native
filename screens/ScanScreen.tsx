import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getBookByISBN } from '../data/moly';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const molyBook = await getBookByISBN(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    if (molyBook === undefined) {
      alert(`No match on Moly`);
    } else {
      alert(
        `Book details:
        ID: ${molyBook.id},  
        Title: ${molyBook.title},
        Author: ${molyBook.author},
        Thumbnail: ${molyBook.cover}`
      );
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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}

      <View style={styles.custom}>
        <Text>Awesome 🎉</Text>
      </View>
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
  custom: {
    flex: 0.2,
    borderRadius: 20,
    padding: 20,
    margin: 5,
  },
});
