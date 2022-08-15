import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Icon } from '../Themed';

export type BookButtonProps = {
  icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
  color: string;
  title: string;
  onPress: () => {};
};

export default function BookButton(props: BookButtonProps) {
  const { onPress, title, icon, color } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name={icon} size={24} style={styles.icon} color={color} />
      {/* <Text style={styles.text}>{title}</Text> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    marginHorizontal: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.25,
  },
  icon: {
    marginRight: 1,
  },
});
