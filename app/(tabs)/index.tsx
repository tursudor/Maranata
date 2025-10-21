//home page

import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>ursu merge fast refreshkl</Text>
      <Link href="/News" style={styles.button}>
        News
      </Link>
      <Link href="/Chat" style={styles.button}>
        Chat
      </Link>
      <Link href="/Map" style={styles.button}>
        Map
      </Link>
      <Link href="/Donate" style={styles.button}>
        Donate
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

});