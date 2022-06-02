import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types/navigation';

export default function ScanHistoryScreen({
  navigation,
}: RootTabScreenProps<'ScanHistory'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your haven't scanned any books yet</Text>
      <Text style={styles.getStartedText}>
        Go to the Scan tab to start scanning
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
