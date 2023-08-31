import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types/navigation';
import BookView from '../components/BookView';
import { MolyBookDetails } from '../types/Book';

const vandorUnnep: MolyBookDetails = {
  id: 15331,
  authors: [
    {
      id: 407,
      name: 'Ernest Hemingway',
    },
  ],
  editors: [],
  title: 'Vándorünnep',
  subtitle: '',
  cover: 'https://moly.hu/system/covers/normal/covers_49254.jpg',
  description:
    'A ​Vándorünnep az író posztumusz kötete, melyben ifjúkora egyik nagy élményét, az "elveszett nemzedék" húszas évekbeli Párizsát idézi fel. A laza visszaemlékezésfűzér feleleveníti a feledhetetlen város hangulatát, a dohányfüstben pácolódó Café des Amateurs jellegzetes bűzét, a lovas tartálykocsik dübörgését, a hazafelé vezető út kis üzleteit, kereskedőit, újságárusait, a hotelt, ahol Verlaine meghalt, s amelynek legfelső emeletén maga az író lakott és dolgozott. "Enyém egész Párizs, de én a füzetemé meg a ceruzámé vagyok" - írja Hemingway. A későbbi világsikerű könyvek alkotója feldolgozandó nyersanyagként szemléli az őt körülvevő világot, az "amerikai kolónia" figuráit, kiváló portrékat rajzolva többek közt Gertrude Steinről, Ezra Poundról, Ford Madox Fordról, s kiváltképp Scott Fitzgeraldról.',
  url: 'https://moly.hu/konyvek/ernest-hemingway-vandorunnep',
  tags: [
    {
      id: 6475,
      name: 'amerikai szerző',
    },
    {
      id: 5637,
      name: 'magyar nyelvű',
    },
    {
      id: 6155,
      name: 'posztumusz',
    },
    {
      id: 129,
      name: '20. század',
    },
    {
      id: 366,
      name: 'memoár',
    },
    {
      id: 749,
      name: 'Párizs',
    },
    {
      id: 4340,
      name: 'társadalomrajz',
    },
    {
      id: 343,
      name: 'irodalomtörténet',
    },
    {
      id: 5443,
      name: '1920-as évek',
    },
    {
      id: 31,
      name: 'novella',
    },
  ],
  like_average: 4.40385,
  like_count: 182,
  reviews_count: 57,
  citations_count: 96,
  year_of_publishing: 1964,
};

const paperTowns: MolyBookDetails = {
  id: 73311,
  authors: [
    {
      id: 16341,
      name: 'John Green',
    },
  ],
  editors: [],
  title: 'Paper ​Towns',
  subtitle: null,
  cover: 'https://moly.hu/system/covers/normal/covers_94560.jpg',
  description:
    'When ​Margo Roth Spiegelman beckons Quentin Jacobsen in the middle of the night—dressed like a ninja and plotting an ingenious campaign of revenge—he follows her. Margo’s always planned extravagantly, and, until now, she’s always planned solo. After a lifetime of loving Margo from afar, things are finally looking up for Q . . . until day breaks and she has vanished. Always an enigma, Margo has now become a mystery. But there are clues. And they’re for Q.\r\nPrintz Medalist John Green returns with the trademark brilliant wit and heart-stopping emotional honesty that have inspired a new generation of readers.',
  url: 'https://moly.hu/konyvek/john-green-paper-towns',
  tags: [
    {
      id: 6475,
      name: 'amerikai szerző',
    },
    {
      id: 2419,
      name: 'filmadaptáció',
    },
    {
      id: 1266,
      name: 'angol nyelvű',
    },
    {
      id: 2126,
      name: 'ifjúsági',
    },
    {
      id: 13,
      name: 'regény',
    },
    {
      id: 5011,
      name: 'Edgar Allan Poe-díj',
    },
    {
      id: 149,
      name: '21. század',
    },
    {
      id: 78,
      name: 'kortárs',
    },
    {
      id: 27,
      name: 'kaland',
    },
    {
      id: 5148,
      name: 'középiskola',
    },
    {
      id: 6270,
      name: 'Florida',
    },
    {
      id: 21,
      name: 'romantikus',
    },
    {
      id: 1229,
      name: 'Amerikai Egyesült Államok',
    },
    {
      id: 2835,
      name: 'barátság',
    },
    {
      id: 310,
      name: 'nyomozás',
    },
    {
      id: 6204,
      name: 'férfi főszereplő',
    },
  ],
  like_average: 4.00485,
  like_count: 103,
  reviews_count: 32,
  citations_count: 135,
  year_of_publishing: 2008,
};

const shadowRising: MolyBookDetails = {
  id: 31043,
  authors: [
    {
      id: 386,
      name: 'Robert Jordan',
    },
  ],
  editors: [],
  title: 'The ​Shadow Rising',
  subtitle: '',
  cover: 'https://moly.hu/system/covers/normal/covers_669105.jpg',
  description:
    "The ​Stone of Tear, invulnerable fortress of legend, has fallen. The Children of the Dragon have risen to the call of prophecy and march to the aid of the Light. Callandor, the Sword That Is Not a Sword, is held by Rand al' Thor, the man proclaimed as the Dragon Reborn. But still the shadows lengthen and still the Forsaken grow in strength. If he is to fight them, Rand must master the male half of the True Source, a power corrupted by the Dark One, a power that drives men to madness, a power that may save or damn the world.",
  url: 'https://moly.hu/konyvek/robert-jordan-the-shadow-rising',
  tags: [
    {
      id: 6469,
      name: 'sorozat része',
    },
    {
      id: 6475,
      name: 'amerikai szerző',
    },
    {
      id: 7369,
      name: 'váltott nézőpont',
    },
    {
      id: 7,
      name: 'fantasy',
    },
    {
      id: 1266,
      name: 'angol nyelvű',
    },
    {
      id: 13,
      name: 'regény',
    },
    {
      id: 27,
      name: 'kaland',
    },
    {
      id: 5693,
      name: 'high fantasy',
    },
    {
      id: 6391,
      name: 'epikus fantasy',
    },
    {
      id: 563,
      name: 'álom',
    },
    {
      id: 6204,
      name: 'férfi főszereplő',
    },
    {
      id: 854,
      name: 'mágia',
    },
    {
      id: 413,
      name: 'utazás',
    },
  ],
  like_average: 4.35715,
  like_count: 7,
  reviews_count: 2,
  citations_count: 1,
  year_of_publishing: 1992,
};

export default function ScanHistoryScreen({
  navigation,
}: RootTabScreenProps<'ScanHistory'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your haven't scanned any books yet</Text>
      <Text style={styles.getStartedText}>
        Go to the Scan tab to start scanning?
      </Text>
      <BookView book={vandorUnnep} />
      <BookView book={paperTowns} />
      <BookView book={shadowRising} />
      <BookView book="no book" />
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
